<template>
  <ion-content>
    <ion-header>
      <ion-toolbar color="primary" v-if="id">
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Edition de {{ details.name }}</ion-title>
      </ion-toolbar>
      <ion-segment @ionChange="segmentChanged($event)" :value="currentDisplay">
        <ion-segment-button value="informations">
          <ion-label>Détails</ion-label>
        </ion-segment-button>
        <ion-segment-button value="health">
          <ion-label>Santé</ion-label>
        </ion-segment-button>
      </ion-segment>
    </ion-header>
    <Informations v-show="currentDisplay === 'informations'" :details="details" @input="input" />
    <Health v-show="currentDisplay === 'health'" :details="details" @input="input" />

     <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button>
        <ion-icon name="save" @click="onSave(details)"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-content>
</template>

<script>
import Informations from './Informations'
import Health from './Health'
import { db, storage } from '@/plugins/firebase'

export default {
  name: 'Edit',
  components: { Informations, Health },
  props: {
    id: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      details: {},
      currentDisplay: 'informations'
    }
  },
  async created () {
    if (this.id) {
      this.loading = await this.$ionic.loadingController
        .create({
          message: 'Veuillez patienter...'
        })
      this.loading.present()
      const snapshot = await db.collection('animals').doc(this.id).get()
      this.details = snapshot.data()
      this.loading.dismiss()
    }
  },
  methods: {
    segmentChanged (event) {
      this.currentDisplay = event.detail.value
    },
    input (form) {
      this.details = { ...this.details, ...form }
    },
    async onSave (form) {
      (this.id ? this.update : this.create)(form)
    },
    async create (form) {
      this.loading.present()
      const image = form.imageUrl
      delete form.imageUrl

      form.group = this.$store.state.authGroup
      const doc = await db.collection('animals').add(form)
      const id = doc.id
      if (image) {
        const ref = storage.ref().child(`animals/${id}.jpg`)
        const snapshot = await ref.putString(image, 'data_url')
        const imageUrl = await snapshot.ref.getDownloadURL()
        await doc.update({ imageUrl })
      }
      this.$router.replace({ name: 'details', params: { id } })
    },
    async update (form) {
      this.loading.present()
      if (form.imageUrl && form.imageUrl.startsWith('data:')) {
        const ref = storage.ref().child(`animals/${this.id}.jpg`)
        const snapshot = await ref.putString(form.imageUrl, 'data_url')
        form.imageUrl = await snapshot.ref.getDownloadURL()
      }
      await db.collection('animals').doc(this.id).update(form)
      this.loading.dismiss()
      this.$router.replace({ name: 'details', params: { id: this.id } })
    }
  }
}
</script>
