<template>
  <div class="ion-page">
    <ion-content class="ion-padding">
      <h1>Bienvenu sur Gege</h1>
      <ion-item margin-top>
        <ion-label position="floating">Identifiant</ion-label>
        <ion-input></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Mot de passe</ion-label>
        <ion-input type="password"></ion-input>
      </ion-item>
      <div margin-top>
        <ion-button expand="full" color="primary" @click="$router.push('/')">Se connecter</ion-button>
      </div>
      <div margin-top>
        <router-link to="/forgotten-password">Mot de passe oublier ?</router-link>
      </div>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: "login",
};
</script>