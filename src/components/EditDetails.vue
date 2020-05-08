<template>
  <ion-content>
    <ion-list>
      <ion-item>
        <ImageManager v-model="form.imageUrl" />
      </ion-item>
      <ion-item v-for="(field, key) in fields" :key="key">
        <ion-label position="floating">{{ field.label }}</ion-label>
        <ion-datetime v-if="field.type ==='date'" @ionChange="form[field.prop] = $event.target.value" :value="form[field.prop]"></ion-datetime>
        <ion-textarea v-else-if="field.type ==='textarea'" @ionInput="form[field.prop] = $event.target.value" :value="form[field.prop]" auto-grow></ion-textarea>
        <ion-select v-else-if="field.type ==='select'" @ionChange="form[field.prop] = $event.target.value" :value="form[field.prop]">
          <ion-select-option v-for="option in field.selectOptions" :key="option.value" :value="option.value">
            {{ option.label }}
          </ion-select-option>
        </ion-select>
        <ion-input v-else @ionInput="form[field.prop] = $event.target.value" :value="form[field.prop]"></ion-input>
      </ion-item>
    </ion-list>
     <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button>
        <ion-icon name="save" @click="$emit('save', form)"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-content>
</template>

<script>
import ImageManager from '@/components/ImageManager'

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
          prop: 'birth',
          type: 'date'
        },
        {
          label: 'Lieu de naissance',
          prop: 'birthPlace'
        },
        {
          label: 'Sexe',
          prop: 'gender',
          type: 'select',
          selectOptions: [
            {
              value: 'F',
              label: 'Femelle'
            },
            {
              value: 'M',
              label: 'Mâle'
            }
          ]
        },
        {
          label: 'Suivi de l\'animal',
          prop: 'following',
          type: 'textarea'
        }
      ]
    }
  },
  computed: {
    form () {
      return this.details
    }
  }
}
</script>
