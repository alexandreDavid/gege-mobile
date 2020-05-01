<template>
  <div class="ion-page">
    <ion-content class="ion-padding">
      <h1>Bienvenu sur Gege</h1>
      <ion-item margin-top>
        <ion-label position="floating">E-mail</ion-label>
        <ion-input @ionInput="email = $event.target.value" type="email"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Mot de passe</ion-label>
        <ion-input @ionInput="password = $event.target.value" type="password"></ion-input>
      </ion-item>
      <div margin-top>
        <ion-button expand="full" color="primary" @click="login" :disabled="!email || !password">Se connecter</ion-button>
      </div>
      <div margin-top>
        <router-link to="/forgotten-password">Mot de passe oublier ?</router-link>
      </div>
    </ion-content>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  created () {
    this.setAuthToken('')
  },
  methods: {
    ...mapActions([
      'setAuthToken'
    ]),
    login (email, password) {
      this.setAuthToken(`OK: ${email}`)
      this.$router.push('/')
    }
  }
}
</script>
