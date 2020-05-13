<template>
  <EditDetails @save="onSave" />
</template>

<script>
import EditDetails from '@/components/EditDetails'
import { db, storage } from '@/plugins/firebase'

export default {
  name: 'CreateDetails',
  components: { EditDetails },
  data () {
    return {
      details: {},
      edit: false
    }
  },
  methods: {
    async onSave (form) {
      const loading = await this.$ionic.loadingController
        .create({
          message: 'Sauvegarde en cours...'
        })
      loading.present()
      const image = form.imageUrl
      delete form.imageUrl

      form.group = this.$store.state.authGroup
      const doc = await db.collection('animals').add(form)
      const id = doc.id
      if (image) {
        const ref = storage.ref().child(`animals/${id}.jpg`)
        const snapshot = await ref.putString(image, 'data_url')
        const imageUrl = await snapshot.ref.getDownloadURL()
        await doc.update({ imageUrl })
      }
      loading.dismiss()
      this.$router.replace({ name: 'details', params: { id } })
    }
  }
}
</script>
