<template >
  <div>
    <img v-if="imageUrl" :src="imageUrl" @click="takePicture()" />
    <ion-button v-else @click="takePicture()">
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
  computed: {
    imageUrl: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    async takePicture () {
      const isAvailable = true
      if (!isAvailable) {
        // Have the user upload a file instead
        alert('No Camera Aailable')
      } else {
        // Otherwise, make the call:
        try {
          const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.DataUrl,
            source: CameraSource.Prompt
          })
          console.log('image', image)
          // image.base64_data will contain the base64 encoded result as a JPEG, with the data-uri prefix added
          this.imageUrl = image.dataUrl
          // can be set to the src of an image now
          console.log(image)
        } catch (e) {
          console.log('error', e)
          this.$ionic.alertController
            .create({
              message: e,
              buttons: ['OK']
            })
            .then(a => a.present())
        }
      }
    }
  }
}
</script>
