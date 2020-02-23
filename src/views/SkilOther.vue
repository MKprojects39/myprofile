<template>
    <div class="d-flex justify-center mt-5 mt-lg-10">
        
        <v-container
         style="max-width: 300px; margin: auto;"
        >
          <v-layout row wrap>
            <v-flex xs12>
              <v-card color="teal darken-2" class="white--text">
                <v-card-title primary-title>
                  <div class="headline">AWS</div>
                  <div class="v-card_text">ポートフォリオ作成の本番環境にcloud9を使用し、その他S3やcloudFrontなども扱いました。まだまだ勉強中ですがawsを使用してのデプロイにも挑戦していきたいです。</div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex xs12>
              <v-card color="blue darken-2" class="white--text p">
                <v-container fluid grid-list-lg>
                  <v-layout row>
                    <v-flex xs12>
                      <div>
                        <div class="headline">Docker</div>
                        <div class="v-card_text">開発環境にてDockerを使用しました。こちらもまだまだ勉強中です。</div>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex xs12>
              <v-card color="pink" class="white--text p">
                <v-container fluid grid-list-lg>
                  <v-layout row>
                    <v-flex xs12>
                      <div>
                        <div class="headline">その他</div>
                        <div class="v-card_text">宅地建物取引士、２級カラーコーディネーター etc</div>
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