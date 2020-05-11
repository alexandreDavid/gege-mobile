<template>
  <ion-content>
    <ion-toolbar>
      <ion-searchbar @ionInput="search = $event.target.value" placeholder="Rechercher"></ion-searchbar>
    </ion-toolbar>
    <ion-list v-if="!loading">
      <ion-item v-for="(entity, key) in filteredList" :key="key" button @click="$router.push({ name: 'details', params: { id: entity.id } })">
        <ion-thumbnail slot="start">
          <img :src="entity.imageUrl">
        </ion-thumbnail>
        <ion-label>
          <h3>{{ entity.name }}</h3>
          <p>{{ entity.type }}</p>
        </ion-label>
      </ion-item>
    </ion-list>
    <ion-list v-else>
      <ion-item v-for="(_, key) in new Array(8)" :key="key">
        <ion-thumbnail slot="start">
          <ion-skeleton-text></ion-skeleton-text>
        </ion-thumbnail>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
          <p>
            <ion-skeleton-text animated style="width: 30%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script>
import { db } from '@/plugins/firebase'

export default {
  data () {
    return {
      search: '',
      list: [],
      loading: true
    }
  },
  computed: {
    filteredList () {
      return this.list.filter(entity => {
        return entity.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  mounted () {
    db.collection('animals').where('group', '==', this.$store.state.authGroup).get().then((querySnapshot) => {
      this.list = []
      querySnapshot.forEach((doc) => {
        this.list.push({ ...doc.data(), id: doc.id })
      })
      this.loading = false
    })
  }
}
</script>
