<template>
  <ion-menu side="start" content-id="main-content">
    <ion-header>
      <ion-toolbar translucent>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item @click="$router.push('/about')">
          <ion-icon name="information-circle-outline" slot="start"></ion-icon>
          <ion-label>A propos</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon name="paper-plane" slot="start"></ion-icon>
          <ion-label>Outbox</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon name="heart" slot="start"></ion-icon>
          <ion-label>Favorites</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon name="archive" slot="start"></ion-icon>
          <ion-label>Archived</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon name="trash" slot="start"></ion-icon>
          <ion-label>Trash</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon name="log-out" slot="start" color="danger"></ion-icon>
          <ion-label color="danger">Se deconnecter</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>
