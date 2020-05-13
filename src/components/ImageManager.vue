<template >
  <div>
    <img v-if="image" :src="image" @click="presentActionSheet" />
    <ion-button v-else @click="presentActionSheet">
      <ion-icon name="add"></ion-icon>
      Ajouter une image
    </ion-button>
  </div>
</template>

<script>
import { Plugins, CameraSource, CameraResultType } from '@capacitor/core'
const { Camera } = Plugins
export default {
  name: 'CameraPage',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      image: ''
    }
  },
  created () {
    this.image = this.value
  },
  methods: {
    presentActionSheet () {
      return this.$ionic.actionSheetController
        .create({
          header: 'Ajouter une photo',
          buttons: [
            {
              text: 'Depuis la gallerie',
              handler: () => {
                this.takePicture(CameraSource.Photos)
              }
            },
            {
              text: 'Prendre une photo',
              handler: () => {
                this.takePicture(CameraSource.Camera)
              }
            },
            {
              text: 'Annuler',
              role: 'cancel'
            }
          ]
        })
        .then(a => a.present())
    },
    async takePicture (source) {
      try {
        const image = await Camera.getPhoto({
          quality: 90,
          resultType: CameraResultType.DataUrl,
          source
        })
        this.image = image.dataUrl
        this.$emit('input', this.image)
      } catch (e) {
        console.log('error', e)
        this.$ionic.alertController
          .create({
            message: 'L\'image n\'a pas été ajoutée',
            buttons: ['OK']
          })
          .then(a => a.present())
      }
    }
  }
}
</script>
