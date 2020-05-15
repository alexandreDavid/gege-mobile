<template>
  <div>
    <ion-list>
      <ion-item>
        <ImageManager v-model="form.imageUrl" @input="changeImage" />
      </ion-item>
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
import ImageManager from '@/components/ImageManager'
import { details as fields } from '@/constants/fields'

export default {
  components: { ImageManager },
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
    changeImage (newImage) {
      this.onChange('imageUrl', newImage)
    },
    onChange (prop, value) {
      this.form[prop] = value
      this.$emit('input', this.form)
    }
  }
}
</script>
