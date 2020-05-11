<template>
  <EditDetails @save="onSave" />
</template>

<script>
import EditDetails from '@/components/EditDetails'
import { db } from '@/plugins/firebase'

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
      form.group = this.$store.state.authGroup
      const doc = await db.collection('animals').add(form)
      this.$router.replace({ name: 'details', params: { id: doc.id } })
    }
  }
}
</script>
