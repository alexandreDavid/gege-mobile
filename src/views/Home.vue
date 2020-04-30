<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Gege mobile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Welcome To @ionic/vue</h1>
      <img alt="Vue logo" src="../assets/logo.png">
    </ion-content>
    <router-link to="/login">Login</router-link>
    <router-link to="/about">Go to the nested part</router-link>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>