<template>
  <ion-content>
    <ion-list>
      <ion-item>
        <ion-label position="floating">Type</ion-label>
        <ion-select @ionChange="type = $event.target.value" :value="type">
          <ion-select-option value="ration">Fiche ration</ion-select-option>
          <ion-select-option value="alim">Préférences alimentaire</ion-select-option>
          <ion-select-option value="training">Training</ion-select-option>
          <ion-select-option value="behaviour">Comportement</ion-select-option>
          <ion-select-option value="enrichment">Enrichissements</ion-select-option>
          <ion-select-option value="treatment">Traitement en cours</ion-select-option>
          <ion-select-option value="observe">Observations</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Animaux</ion-label>
        <ion-select multiple>
          <ion-select-option value="macaques">Macaques</ion-select-option>
          <ion-select-option value="kiki">Kiki</ion-select-option>
          <ion-select-option value="jp">Jean-Paul</ion-select-option>
          <ion-select-option value="operarion">Girafes</ion-select-option>
          <ion-select-option value="contraception">Sophie</ion-select-option>
          <ion-select-option value="gestation">Loulou</ion-select-option>
          <ion-select-option value="prophylaxie">Gorilles</ion-select-option>
          <ion-select-option value="anesthesie">Platon</ion-select-option>
          <ion-select-option value="observation">Descartes</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-item v-if="type === 'ration'">
        <ion-label position="floating">Titre</ion-label>
        <ion-input />
      </ion-item>
      <ion-item v-else>
         <ion-label position="floating">Description</ion-label>
        <ion-textarea />
      </ion-item>
    </ion-list>
    <template v-if="type === 'ration'">
      <ion-card v-for="(ration, key) in rations" :key="key">
        <ion-card-title>
          <ion-item>
            <ion-label position="floating">Nom de la ration</ion-label>
            <ion-input @ionInput="ration.name = $event.target.value" :value="ration.name" />
          </ion-item>
        </ion-card-title>
        <ion-card-content>
          <ion-item>
            <ion-label position="floating">Contenu</ion-label>
            <ion-textarea @ionInput="ration.content = $event.target.value" auto-grow></ion-textarea>
          </ion-item>
        </ion-card-content>
      </ion-card>
      <ion-button expand="block" margin-bottom @click="addRation">
        <ion-icon name="add"></ion-icon>
        Ajouter une autre ration
      </ion-button>
    </template>
  </ion-content>
</template>

<script>
import { db } from '@/plugins/firebase'

export default {
  name: 'Ration',
  data () {
    return {
      type: 'ration',
      title: '',
      rations: [
        { name: '', content: '' }
      ]
    }
  },
  methods: {
    addRation () {
      this.rations.push({ name: '', content: '' })
    },
    async save (form) {
      await db.collection('infos').add(form)
    }
  }
}
</script>
