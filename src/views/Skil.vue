<template>


  <v-container>
    <h2 class="d-flex justify-center mt-5 mt-lg-10">スキル</h2>
    <nav class="d-flex justify-center mt-5 mt-lg-10 ">
      <router-link to="/skil/front" 
      active-class="link--active"
      exact
      class="link"
      >フロントエンド</router-link>

      <router-link to="/skil/back"
       active-class="link--active"
       class="link">サーバーサイド</router-link>

      <router-link to="/skil/other" 
      active-class="link--active"
      exact
      class="link"
      >その他
      </router-link>
    </nav>
    <router-view class="d-flex justify-center mt-5 mt-lg-10"></router-view>
  </v-container>

</template>
<style scoped>
.link {
  /* padding-left: 10px; */
  padding-right: 30px;
}
a:link { color: #48E973; text-decoration: none; font-size: 13px;}
a:visited { color: #48E973; }
a:hover { color: #48E973; }
a:active { color: #48E973; }
</style>