<template>
  <div>
    <ion-list>
      <ion-item v-for="(field, key) in fields" :key="key">
        <ion-label position="floating">{{ field.label }}</ion-label>
        <ion-datetime v-if="field.type ==='date'" @ionChange="onChange(field.prop, $event.target.value)" :value="form[field.prop]"></ion-datetime>
        <ion-textarea v-else-if="field.type ==='textarea'" @ionInput="onChange(field.prop, $event.target.value)" :value="form[field.prop]" auto-grow></ion-textarea>
        <ion-select v-else-if="field.type ==='select'" @ionChange="onChange(field.prop, $event.target.value)" :value="form[field.prop]">
          <ion-select-option v-for="option in field.selectOptions" :key="option.value" :value="option.value">
            {{ option.label }}
          </ion-select-option>
        </ion-select>
        <ion-input v-else @ionInput="onChange(field.prop, $event.target.value)" :value="form[field.prop]"></ion-input>
      </ion-item>
    </ion-list>
  </div>
</template>

<script>
import { health as fields } from '@/constants/fields'

export default {
  props: {
    details: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      fields
    }
  },
  computed: {
    form () {
      return { ...this.details }
    }
  },
  methods: {
    onChange (prop, value) {
      this.form[prop] = value
      this.$emit('input', this.form)
    }
  }
}
</script>
