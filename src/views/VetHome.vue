<template>
  <ion-tabs>
    <ion-tab tab="search">
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Rechercher un individu</ion-title>
        </ion-toolbar>
      </ion-header>

      <Search />
    </ion-tab>

    <ion-tab tab="new">
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Créer une nouvelle fiche</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content fullscreen class="ion-padding">
        <h1>bla bla</h1>
      </ion-content>
    </ion-tab>

    <ion-tab tab="actions">
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Actions effectuées</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content fullscreen class="ion-padding">
        <h1>bla bla</h1>
      </ion-content>
    </ion-tab>

    <ion-tab tab="schedule">
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Agenda</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content fullscreen class="ion-padding">
        <h1>Agenda</h1>
      </ion-content>
    </ion-tab>

    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="search">
        <ion-label>Recherche</ion-label>
        <ion-icon name="search"></ion-icon>
      </ion-tab-button>
      <ion-tab-button tab="new">
        <ion-label>Nouvelle ficher</ion-label>
        <ion-icon name="add"></ion-icon>
      </ion-tab-button>
      <ion-tab-button tab="actions">
        <ion-label>Actions effectuées</ion-label>
        <ion-icon name="construct"></ion-icon>
      </ion-tab-button>
      <ion-tab-button tab="schedule">
        <ion-label>Agenda</ion-label>
        <ion-icon name="calendar"></ion-icon>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script>
import Search from '@/components/Search'

export default {
  name: 'vet-home',
  components: {
    Search
  }
}
</script>
