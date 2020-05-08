<template>
  <ion-content>
    <ion-toolbar>
      <ion-searchbar @ionInput="search = $event.target.value" placeholder="Rechercher"></ion-searchbar>
    </ion-toolbar>
    <ion-list v-if="!loading">
      <ion-item v-for="(entity, key) in filteredList" :key="key" button @click="$router.push('/details')">
        <ion-thumbnail slot="start">
          <img :src="entity.imageUrl">
        </ion-thumbnail>
        <ion-label>
          <h3>{{ entity.name }}</h3>
          <p>{{ entity.type }}</p>
          <p>{{ entity.age > 1 ? `${entity.age} ans` : '1 an' }}</p>
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
    this.list = [
      {
        name: 'Kiki',
        type: 'Macaque',
        age: 1
      },
      {
        name: 'Lulu',
        type: 'Macaque',
        age: 3
      },
      {
        name: 'Jean-Paul',
        type: 'Macaque',
        age: 3
      },
      {
        name: 'Roro',
        type: 'Macaque',
        age: 12
      },
      {
        name: 'Steven',
        type: 'Macaque',
        age: 9
      },
      {
        name: 'Pierre-Emmanuel',
        type: 'Macaque',
        age: 8
      },
      {
        name: 'Zorba the Grec',
        type: 'Macaque',
        age: 4
      }
    ]
    db.collection('animals').get().then((querySnapshot) => {
      this.list = []
      console.log(querySnapshot)
      querySnapshot.forEach((doc) => {
        this.list.push(doc.data())
      })
      this.loading = false
    })
  }
}
</script>
