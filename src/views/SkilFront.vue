<template>
    <div class="d-flex justify-center mt-5 mt-lg-10">
        
        <v-container
         style="max-width: 300px; margin: auto;"
        >
          <v-layout row wrap>
            <v-flex xs12>
              <v-card color="orange darken-2" class="white--text">
                <v-card-title primary-title>
                  <div class="headline">HTML & CSS</div>
                  <div class="v-card_text">Youtubeなどのチュートリアル動画にて、LP模写などをして勉強しました。簡単なサイトはBootstrapなども使います。</div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex xs12>
              <v-card color="blue darken-2" class="white--text p">
                <v-container fluid grid-list-lg>
                  <v-layout row>
                    <v-flex xs12>
                      <div>
                        <div class="headline">jQuery</div>
                        <div class="v-card_text">シンプルなWebサイト等ではjQueryを使っています。ポートフォリオにも必要な部分に絞り使用しました。</div>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex xs12>
              <v-card color="green" class="white--text p">
                <v-container fluid grid-list-lg>
                  <v-layout row>
                    <v-flex xs12>
                      <div>
                        <div class="headline">Vue.js</div>
                        <div class="v-card_text">動画教材にて一通り抑えてから、このプロフィールサイトを作成してみました。今後はDBなども絡めてVuexの恩恵を受けられるアプリを作成していきたいです。</div>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      
    </div>
</template>

<style scoped>
.v-card_text {
    padding-top: 10px;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.375rem;
    letter-spacing: .0071428571em;
}
.p {
    margin-top: 25px;
}

</style>