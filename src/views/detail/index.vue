<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Fiche de Kiki</ion-title>
      </ion-toolbar>
      <ion-segment @ionChange="segmentChanged($event)" :value="currentDisplay">
        <ion-segment-button value="informations">
          <ion-label>Détails</ion-label>
        </ion-segment-button>
        <ion-segment-button value="health">
          <ion-label>Santé</ion-label>
        </ion-segment-button>
        <ion-segment-button value="observations">
          <ion-label>Observations</ion-label>
        </ion-segment-button>
      </ion-segment>
    </ion-header>
    <ion-content>
      <Informations v-show="currentDisplay === 'informations'" />
      <Health v-show="currentDisplay === 'health'" />
      <Observations v-show="currentDisplay === 'observations'" />
    </ion-content>
  </div>
</template>

<script>
import Informations from './Informations'
import Health from './Health'
import Observations from './Observations'

export default {
  components: { Informations, Health, Observations },
  data () {
    return {
      currentDisplay: 'informations'
    }
  },
  methods: {
    segmentChanged (event) {
      this.currentDisplay = event.detail.value
    }
  }
}
</script>
