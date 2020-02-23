<template>
    <div class="d-flex justify-center mt-5 mt-lg-10">
        
        <v-container
         style="max-width: 300px; margin: auto;"
        >
          <v-layout row wrap>
            <v-flex xs12>
              <v-card color="red darken-2" class="white--text">
                <v-card-title primary-title>
                  <div class="headline">Ruby (Ruby on Rails)</div>
                  <div class="v-card_text">メインポートフォリオ作成に使用しました。１番メインで学習した言語です。基本的なアプリは作成できます。</div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex xs12>
              <v-card color="cyan darken-2" class="white--text p">
                <v-container fluid grid-list-lg>
                  <v-layout row>
                    <v-flex xs12>
                      <div>
                        <div class="headline">PHP</div>
                        <div class="v-card_text">軽くアフィリエイトサイトを運営していた頃、WordPressに手を加える為に使用していました。</div>
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