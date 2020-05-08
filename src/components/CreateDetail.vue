<template>
  <ion-content>
    <ion-list>
      <ion-item>
        <ImageManager v-model="form.imageUrl" />
      </ion-item>
      <ion-item v-for="(field, key) in fields" :key="key">
        <ion-label position="floating">{{ field.label }}</ion-label>
        <ion-datetime v-if="field.type ==='date'" @ionInput="form[field.prop] = $event.target.value"></ion-datetime>
        <ion-textarea v-else-if="field.type ==='textarea'" @ionInput="form[field.prop] = $event.target.value" auto-grow></ion-textarea>
        <ion-select v-else-if="field.type ==='select'" @ionInput="form[field.prop] = $event.target.value">
          <ion-select-option v-for="option in field.selectOptions" :key="option.value" :value="option.value">
            {{ option.label }}
          </ion-select-option>
        </ion-select>
        <ion-input v-else @ionInput="form[field.prop] = $event.target.value"></ion-input>
      </ion-item>
    </ion-list>
     <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button>
        <ion-icon name="save" @click="save(form)"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-content>
</template>

<script>
import ImageManager from '@/components/ImageManager'
import { db } from '@/plugins/firebase'

export default {
  components: { ImageManager },
  data () {
    return {
      form: {
      },
      fields: [
        {
          label: 'Identification',
          prop: 'id'
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
  methods: {
    save (form) {
      db.collection('animals').add(form).then(() => {
        this.$router.push('/details')
      })
    }
  }
}
</script>
