<template>
  <ion-content>
    <ion-list>
      <ion-item>
        <ion-label>Titre</ion-label>
        <ion-input />
      </ion-item>
      <ion-item>
        <ion-label>Animaux</ion-label>
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
    </ion-list>
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
  </ion-content>
</template>

<script>
export default {
  name: 'Ration',
  data () {
    return {
      title: '',
      rations: [
        { name: '', content: '' }
      ]
    }
  },
  methods: {
    addRation () {
      this.rations.push({ name: '', content: '' })
    }
  }
}
</script>
