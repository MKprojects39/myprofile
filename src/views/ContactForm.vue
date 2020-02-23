<template>
    <v-app>
      <v-content>
        <v-container>
          <h2 class="d-flex justify-center mt-5 mt-lg-10">お問い合わせ</h2><br>
  <v-layout class="d-flex justify-center mt-5 mt-lg-10">
    <v-btn
      icon
      fab
      color="teal"
      @click="witeToClipboard()"
    >
      <v-icon class="d-flex justify-center mt-5 mt-lg-10 copy">gmail copy</v-icon>
    </v-btn>

    <div id="target" >
      <p class="d-flex justify-center mt-5 mt-lg-10 copy">yu7319944@gmail.com</p>
     
    </div><br>
    
  </v-layout>
  <p class="d-flex justify-center mt-5 mt-lg-10 copy2">お気軽にご連絡ください！</p>
        </v-container>
      </v-content>
    </v-app>
</template>

<script>
export default {
  methods: {
    witeToClipboard() {
      const copyText = this.$el.querySelector('#target').textContent
      navigator.clipboard
        .writeText(copyText)
        .then(() => {
          console.log('テキストコピー完了')
        })
        .catch(e => {
          console.error(e)
        })
    }
  }
}
</script>

<style scoped>
.copy {
   margin-left: 160px;
}
.copy2{
  margin-left: 20px;
  color: teal;
}
</style>