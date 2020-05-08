<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="home"></ion-back-button>
        </ion-buttons>
        <ion-title>Fiche de Kiki</ion-title>
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
    <ion-content v-if="!loading">
      <Informations v-show="currentDisplay === 'informations' && !edit" :details="details" />
      <Health v-show="currentDisplay === 'health'" />
      <HealtherDoc v-show="currentDisplay === 'healther-doc'" />
      <EditDetails v-show="currentDisplay === 'informations' && edit" :details="details" @save="save" />
    </ion-content>
  </div>
</template>

<script>
import { db } from '@/plugins/firebase'

import Informations from './Informations'
import Health from './Health'
import HealtherDoc from './HealtherDoc'
import EditDetails from '@/components/EditDetails'

export default {
  components: { Informations, Health, HealtherDoc, EditDetails },
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
      edit: false,
      loading: true
    }
  },
  async created () {
    await this.getDetails()
    this.loading = false
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
                this.edit = true
              }
            },
            {
              text: 'Dupliquer',
              handler: () => {
                console.log('Favorite clicked')
              }
            },
            {
              text: 'Annuler',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked')
              }
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
                this.$router.replace('/')
              }
            }
          ]
        })
        .then(a => a.present())
    },
    async save (form) {
      this.loading = true
      await db.collection('animals').doc(this.id).update(form)
      this.edit = false
      await this.getDetails()
      this.loading = false
    }
  }
}
</script>
