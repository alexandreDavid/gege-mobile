<template>
  <ion-content fullscreen class="ion-padding">
    <ion-searchbar></ion-searchbar>
    <ion-list>
      <ion-item button @click="$router.push('/detail')">
        <ion-thumbnail slot="start">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Macaca_nigra_self-portrait_large.jpg/200px-Macaca_nigra_self-portrait_large.jpg">
        </ion-thumbnail>
        <ion-label>
          <h3>Abbey Road</h3>
          <p>The Beatles</p>
          <p>1969</p>
        </ion-label>
      </ion-item>
      <ion-item button @click="$router.push('/detail')">
        <ion-thumbnail slot="start">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Macaca_nigra_self-portrait_large.jpg/200px-Macaca_nigra_self-portrait_large.jpg">
        </ion-thumbnail>
        <ion-label>
          <h3>The Dark Side of the Moon</h3>
          <p>Pink Floyd</p>
          <p>1973</p>
        </ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</template>
