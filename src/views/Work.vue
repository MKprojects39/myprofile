<template>
  <v-content>
    <v-container>
      <h2 class="d-flex justify-center mt-5 mt-lg-10">作品</h2><br>
        <v-layout wrap>
          <v-flex xs12 sm12 md6 ld6 class="d-flex justify-center">
          <v-card style="width: 560px; height: 750px;">
            <h2 class="d-flex justify-center mt-5 mt-lg-10">お天気通知bot</h2><br>
            <img data-v-15e78dd0="" src="/line.jpg" alt="#" style="width: 300px; height: 500px;" class="line">
          
          <v-slide-group style="padding-top: 10px;">
            <v-slide-content class="tag">
              <v-chip>#Ruby</v-chip> <v-chip>#Ruby on Rails</v-chip>
            </v-slide-content>
          </v-slide-group>
        <v-row justify="center" style="padding-top: 30px;">
        <v-btn
          color="teal"
          dark
          @click.stop="dialog1 = true"
        
        >
          詳細はこちら
        </v-btn>
  
        <v-dialog
        v-model="dialog1"
        max-width="500"
        >
        <v-card>
          <v-card-title class="headline">天気予報を教えてくれるLinebotです。</v-card-title>
  
          <v-card-text>
            今日、明日、明後日の天気や降水確率を教えてくれます。<br>
            降水確率が５０％以上の日には傘を持つように通知。また会話する事や、ごはんのメニューも選んでくれます。
          </v-card-text>
          <v-card-text>
            Github  <a href="https://github.com/MKprojects39/mkbot" target="_blank">MKbot</a>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
  
            
  
            <v-btn
              color="green darken-1"
              text
              @click="dialog1 = false"
            >
              閉じる
            </v-btn>
          </v-card-actions>
          </v-card>
          </v-dialog>
          </v-row>


          </v-card>
          </v-flex>
          <v-flex xs12 sm12 md6 ld6 class="d-flex justify-center">
          <v-card style="width: 560px; height: 750px;">
            <h2 class="d-flex justify-center mt-5 mt-lg-10">自動コーディネートアプリ</h2><br>
            <img data-v-15e78dd0="" src="/ocean.jpg" alt="#" style="width: 560px; height: 400px;" class="ocean">
            <img data-v-15e78dd0="" src="/ocean2.jpg" alt="#" style="width: 300px; height: 500px;" class="ocean2">
          <v-slide-group style="padding-top: 10px;">
            <v-slide-content class="tag">
              <v-chip>#Ruby</v-chip> <v-chip>#Ruby on Rails</v-chip> <v-chip>#Vue.js</v-chip>
            </v-slide-content>
          </v-slide-group>



      <v-row justify="center" style="padding-top: 60px;">
        <v-btn
          color="teal"
          dark
          @click.stop="dialog2 = true"
        
        >
          詳細はこちら
        </v-btn>
  
        <v-dialog
        v-model="dialog2"
        max-width="500"
        >
        <v-card>
          <v-card-title class="headline">その日の気温から洋服を選んでくれるアプリです</v-card-title>
  
          <v-card-text>
            そのほかにも自分の服や靴をシェアする洋服共有SNSという機能があります。
          </v-card-text>
          <v-card-text>
            Github  <a href="https://github.com/MKprojects39/Ocean" target="_blank">Ocean</a>
          </v-card-text>
          <v-card-text>
            実際のアプリはこちら➤ <a href="https://oceanmorningggg.herokuapp.com/" target="_blank">Ocean Morning</a>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
  
            
  
            <v-btn
              color="green darken-1"
              text
              @click="dialog2 = false"
            >
              閉じる
            </v-btn>
            </v-card-actions>
          </v-card>
          </v-dialog>
          </v-row>



          </v-card>
          </v-flex>
        </v-layout>  
    </v-container>
  </v-content>
</template>

<script>
export default {
        data () {
      return {
        dialog1: false,
        dialog2: false
      }
    }
}
</script>


<style scoped>
.line{
  margin-left: 120px;
}
.tag{
  margin:0 auto
  
  }
@media screen and (max-width: 600px) {
  img.line{
    margin: 0 auto;
    padding-left: 30px;
  }
  img.ocean{
    display: none;
  }
  img.ocean2 {
        margin: 0 auto;
    padding-left: 30px;
  }
  .flex {
    padding-top: 15px;
  }
  }
  @media screen and (min-width: 600px) {
    img.ocean2{
    display: none;
  }
  }

</style>