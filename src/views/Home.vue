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
import { mapGetters } from 'vuex'
import Menu from '@/components/Menu'
import Search from '@/components/Search'
import CreateDetails from './CreateDetails'
import Ration from '@/components/Ration'
import Calendar from '@/components/Calendar'
import Actions from '@/components/Actions'
import Dashboard from '@/components/Dashboard'

export default {
  name: 'Home',
  components: {
    Menu
  },
  computed: {
    ...mapGetters([
      'isVeto'
    ])
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
          component: CreateDetails,
          condition: 'veto'
        },
        {
          id: 'new',
          name: 'Fiche ration',
          icon: 'add',
          title: 'Créer une nouvelle fiche ration',
          component: Ration,
          condition: 'soigneur'
        },
        {
          id: 'calendar',
          name: 'Agenda',
          icon: 'calendar',
          notifications: 6,
          title: 'Agenda',
          component: Calendar
        },
        {
          id: 'actions',
          name: 'Actions',
          icon: 'construct',
          title: 'Actions effectuées',
          component: Actions,
          condition: 'veto'
        },
        {
          id: 'dashboard',
          name: 'Tableau de bord',
          icon: 'construct',
          title: 'Tableau de bord',
          component: Dashboard,
          condition: 'soigneur'
        }
      ]
    }
  },
  created () {
    this.tabs = this.tabs.filter(tab => {
      return !tab.condition || (tab.condition === 'veto' && this.isVeto) || (tab.condition !== 'veto' && !this.isVeto)
    })
  }
}
</script>
