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
        <ion-button expand="full" color="primary" @click="login(email, password)" :disabled="!email || !password">Se connecter</ion-button>
      </div>
      <div margin-top>
        <router-link to="/forgotten-password">Mot de passe oublier ?</router-link>
      </div>
    </ion-content>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { auth, db } from '@/plugins/firebase'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  async created () {
    await auth.signOut()
    this.setAuthToken('')
  },
  methods: {
    ...mapActions([
      'setAuthToken',
      'setAuthRole',
      'setAuthGroup'
    ]),
    async login (email, password) {
      try {
        const { user } = await auth.signInWithEmailAndPassword(email, password)
        const snapshot = await db.collection('users').doc(user.uid).get()
        const details = snapshot.data()
        this.setAuthToken(`OK: ${email}`)
        this.setAuthRole(details.role)
        this.setAuthGroup(details.group)
        this.$router.push('/')
      } catch (error) {
        // var errorCode = error.code
        // var errorMessage = error.message
      }
      // this.setAuthToken(`OK: ${email}`)
      // this.setAuthProfile(email === 'veto' ? email : 'soigneur')
      // this.$router.push('/')
    }
  }
}
</script>
