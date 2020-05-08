<template>
  <ion-content>
    <ion-list>
      <ion-item>
        <ion-img :src="details.imageUrl"></ion-img>
      </ion-item>
      <ion-item v-for="(field, key) in fields" :key="key">
        <ion-label>
          <h3>{{ field.label }}</h3>
          <p>{{ details[field.prop]}}</p>
        </ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      fields: [
        {
          label: 'Identification',
          prop: 'identification'
        },
        {
          label: 'Nom de l\'animal',
          prop: 'name'
        },
        {
          label: 'Espèce',
          prop: 'type'
        },
        {
          label: 'Date de naissance',
          prop: 'birth'
        },
        {
          label: 'Lieu de naissance',
          prop: 'birthPlace'
        },
        {
          label: 'Sexe',
          prop: 'gender'
        },
        {
          label: 'Suivi de l\'animal',
          prop: 'following'
        }
      ]
    }
  }
}
</script>
