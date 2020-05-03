<template>
  <div>
    <Menu />
    <div class="ion-page" id="main-content">
      <ion-tabs>
        <ion-tab v-for="tab in tabs" :key="tab.id" :tab="tab.id">
          <ion-header translucent>
            <ion-toolbar color="primary">
              <ion-buttons slot="start">
                <ion-menu-button></ion-menu-button>
              </ion-buttons>
              <ion-title>{{ tab.title }}</ion-title>
            </ion-toolbar>
          </ion-header>
          <component :is='tab.component' />
        </ion-tab>
        <ion-tab-bar slot="bottom">
          <ion-tab-button v-for="tab in tabs" :key="tab.id" :tab="tab.id">
            <ion-label>{{ tab.name }}</ion-label>
            <ion-icon :name="tab.icon"></ion-icon>
            <ion-badge v-if="tab.notifications">{{ tab.notifications }}</ion-badge>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import Search from '@/components/Search'

export default {
  name: 'Home',
  components: {
    Menu,
    Search
  },
  data () {
    return {
      tabs: [
        {
          id: 'search',
          name: 'Recherche',
          icon: 'search',
          title: 'Rechercher un individu',
          component: Search
        },
        {
          id: 'new',
          name: 'Nouvelle fiche',
          icon: 'add',
          title: 'Créer une nouvelle fiche',
          component: Search
        },
        {
          id: 'actions',
          name: 'Actions',
          icon: 'construct',
          title: 'Actions effectuées',
          component: Search
        },
        {
          id: 'calendar',
          name: 'Agenda',
          icon: 'calendar',
          notifications: 6,
          title: 'Agenda',
          component: Search
        }
      ]
    }
  }
}
</script>
