<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Fiche de {{ details.name }}</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="presentActionSheet">
            <ion-icon slot="icon-only" name="more"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
      <ion-segment @ionChange="segmentChanged($event)" :value="currentDisplay">
        <ion-segment-button value="informations">
          <ion-label>Détails</ion-label>
        </ion-segment-button>
        <ion-segment-button value="health">
          <ion-label>Santé</ion-label>
        </ion-segment-button>
        <ion-segment-button value="healther-doc">
          <ion-label>Fiche soigneur</ion-label>
        </ion-segment-button>
      </ion-segment>
    </ion-header>
    <ion-content>
      <Informations v-show="currentDisplay === 'informations'" :form="details" />
      <Health v-show="currentDisplay === 'health'" :form="details" />
      <HealtherDoc v-show="currentDisplay === 'healther-doc'" />
    </ion-content>
  </div>
</template>

<script>
import { db } from '@/plugins/firebase'

import Informations from './Informations'
import Health from './Health'
import HealtherDoc from './HealtherDoc'

export default {
  components: { Informations, Health, HealtherDoc },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      currentDisplay: 'informations',
      details: {},
      loading: false
    }
  },
  async created () {
    this.loading = await this.$ionic.loadingController
      .create({
        message: 'Veuillez patienter...'
      })
    this.loading.present()
    await this.getDetails()
    this.loading.dismiss()
  },
  watch: {
    id: 'getDetails'
  },
  methods: {
    async getDetails () {
      const snapshot = await db.collection('animals').doc(this.id).get()
      this.details = snapshot.data()
    },
    segmentChanged (event) {
      this.currentDisplay = event.detail.value
    },
    presentActionSheet () {
      return this.$ionic.actionSheetController
        .create({
          header: 'Actions',
          buttons: [
            {
              text: 'Supprimer',
              role: 'destructive',
              handler: () => {
                this.presentConfirmDelete()
              }
            },
            {
              text: 'Editer',
              handler: () => {
                this.$router.push({ name: 'edit', params: { id: this.id } })
              }
            },
            {
              text: 'Dupliquer',
              handler: () => {
                this.duplicate()
              }
            },
            {
              text: 'Annuler',
              role: 'cancel'
            }
          ]
        })
        .then(a => a.present())
    },
    presentConfirmDelete () {
      return this.$ionic.alertController
        .create({
          header: 'Confirmer la suppression',
          message: 'Voulez-vous vraiment supprimer cette fiche ?',
          buttons: [
            {
              text: 'Annuler',
              role: 'cancel'
            },
            {
              text: 'Supprimer',
              role: 'destructive',
              handler: () => {
                this.delete()
              }
            }
          ]
        })
        .then(a => a.present())
    },
    async delete () {
      this.loading.present()
      await db.collection('animals').doc(this.id).delete()
      this.loading.dismiss()
      this.$router.replace('/')
    },
    async duplicate () {
      this.loading.present()
      if (this.details.imageUrl) {
        delete this.details.imageUrl
      }
      const snapshot = await db.collection('animals').add(this.details)
      this.$router.replace({ name: 'details', params: { id: snapshot.id } })
      this.loading.dismiss()
    }
  }
}
</script>
