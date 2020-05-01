<template>
    <ion-content>
      <ion-list>
        <ion-item button @click="$router.push('/detail')">
          <ion-thumbnail slot="start">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Macaca_nigra_self-portrait_large.jpg/200px-Macaca_nigra_self-portrait_large.jpg">
          </ion-thumbnail>
          <ion-label>
            <h3>Kiki</h3>
            <p>Macaque</p>
            <p>1 an</p>
          </ion-label>
        </ion-item>
        <ion-item button @click="$router.push('/detail')">
          <ion-thumbnail slot="start">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Macaca_nigra_self-portrait_large.jpg/200px-Macaca_nigra_self-portrait_large.jpg">
          </ion-thumbnail>
          <ion-label>
            <h3>Lulu</h3>
            <p>Macaque</p>
            <p>3 ans</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
</template>
