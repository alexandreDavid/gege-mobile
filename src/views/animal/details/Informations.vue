<template>
  <ion-content>
    <ion-list>
      <ion-item>
        <ion-img v-if="form.imageUrl" :src="form.imageUrl"></ion-img>
      </ion-item>
      <ion-item v-for="(field, key) in fields" :key="key">
        <ion-label>
          <h3>{{ field.label }}</h3>
          <p>{{ form[field.prop]}}</p>
        </ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script>
import { details as fields } from '@/constants/fields'

export default {
  props: {
    form: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      fields
    }
  }
}
</script>
