<template>
  <ion-content>
    <ion-list>
      <ion-item>
        <ion-label>Date de l'action</ion-label>
        <ion-datetime :value="date" placeholder="Select Date"></ion-datetime>
      </ion-item>
      <ion-item>
        <ion-label>Action réalisée</ion-label>
        <ion-select>
          <ion-select-option value="weigth">Poids</ion-select-option>
          <ion-select-option value="height">Taille</ion-select-option>
          <ion-select-option value="health">Santé de l’animal</ion-select-option>
          <ion-select-option value="operarion">Opérations</ion-select-option>
          <ion-select-option value="contraception">Contraception</ion-select-option>
          <ion-select-option value="gestation">Gestation</ion-select-option>
          <ion-select-option value="prophylaxie">Prophylaxie</ion-select-option>
          <ion-select-option value="anesthesie">Anesthésies</ion-select-option>
          <ion-select-option value="observation">Observations</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-item>
        <ion-label>Sur qui</ion-label>
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
      <ion-item>
        <ion-label position="stacked">Notes</ion-label>
        <ion-textarea auto-grow></ion-textarea>
      </ion-item>
      <ion-item>
        <ion-label>Ajouter un rappel</ion-label>
        <ion-toggle
        @ionChange="displayRappel = !displayRappel"
        value="rappel"
        :checked="displayRappel">
      </ion-toggle>
      </ion-item>
      <ion-item-group v-if="displayRappel">
        <ion-item>
          <ion-label>Nom du rappel</ion-label>
          <ion-input />
        </ion-item>
        <ion-item>
          <ion-label>Date du rappel</ion-label>
          <ion-datetime :value="date" placeholder="Select Date"></ion-datetime>
        </ion-item>
        <ion-item>
          <ion-button size="small">
            <ion-icon name="add"></ion-icon>
            Ajouter un autre rappel
          </ion-button>
        </ion-item>
      </ion-item-group>
    </ion-list>
  </ion-content>
</template>

<script>
export default {
  data () {
    return {
      date: new Date(),
      displayRappel: false
    }
  }
}
</script>
