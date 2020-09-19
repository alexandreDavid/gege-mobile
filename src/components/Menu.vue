<template>
  <ion-menu side="start" content-id="main-content">
    <ion-header>
      <ion-toolbar translucent>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item button @click="$router.push('/about')">
          <ion-icon name="information-circle-outline" slot="start"></ion-icon>
          <ion-label>A propos</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon name="paper-plane" slot="start"></ion-icon>
          <ion-label>Profil (prochainement)</ion-label>
        </ion-item>
        <ion-item button @click="logout">
          <ion-icon name="log-out" slot="start" color="danger"></ion-icon>
          <ion-label color="danger">Se deconnecter</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$router.push('/login')
    }
  }
}
</script>
