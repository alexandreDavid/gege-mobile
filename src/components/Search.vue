<template>
    <ion-content>
      <ion-toolbar color="primary">
        <ion-searchbar @ionInput="search = $event.target.value"></ion-searchbar>
      </ion-toolbar>
      <ion-list>
        <ion-item v-for="(entity, key) in filteredList" :key="key" button @click="$router.push('/detail')">
          <ion-thumbnail slot="start">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Macaca_nigra_self-portrait_large.jpg/200px-Macaca_nigra_self-portrait_large.jpg">
          </ion-thumbnail>
          <ion-label>
            <h3>{{ entity.name }}</h3>
            <p>{{ entity.type }}</p>
            <p>{{ entity.age > 1 ? `${entity.age} ans` : '1 an' }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      list: []
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
  }
}
</script>
