<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/login"></ion-back-button>
        </ion-buttons>
        <ion-title>Mot de passe oublié</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" v-if="!sent">
      <p>Saisissez votre email pour réinitialiser votre mot de passe</p>
      <ion-item>
        <ion-label position="floating">Email</ion-label>
        <ion-input @ionInput="email = $event.target.value" type="email"></ion-input>
      </ion-item>
      <div margin-top>
        <ion-button expand="full" color="primary" @click="sendMail(email)" :disabled="!email">Envoyer le mail</ion-button>
      </div>
    </ion-content>
    <ion-content class="ion-padding" v-else>
      <p>Email envoyé.Veuillez cliquer sur le lien reçu dans votre boite mail pour réinitialiser votre mot de passe.</p>
    </ion-content>
  </div>
</template>

<script>
import { auth } from '@/plugins/firebase'

export default {
  name: 'forgotten-password',
  data () {
    return {
      email: '',
      sent: false
    }
  },
  methods: {
    async sendMail (email) {
      try {
        await auth.sendPasswordResetEmail(email)
        this.sent = true
      } catch (err) {
        this.$ionic.alertController
          .create({
            message: 'Une erreur est survenue.',
            buttons: ['Fermer']
          })
          .then(a => a.present())
      }
    }
  }
}
</script>
