<template>
    <v-app>
      <v-content>
        <v-container>
            <h2 class="d-flex justify-center mt-5 mt-lg-10">Profile</h2><br>
            <v-layout wrap> 
                <v-flex xs12 sm12 md6 lg6 class="d-flex justify-center">
                    <img data-v-15e78dd0="" src="/xG25Ejno_400x400.jpg" alt="#" >
                </v-flex>
                <v-flex xs11 sm11 md6 lg6 class="d-flex justify-center">
                    <v-text class="text">初めまして！YKと申します。<br>
現在２５歳でIT機器関連のテクニカルサポートの仕事をしております。<br>
2019年11月頃に、PG関連に興味を持ち最初はHTMLから入り最終的にはRubyやrailsなどのサーバーサイドの方まで学習しました。<br>
ここ１年くらいで日々の学習習慣を身に着けることができたので独学にて学習を継続できました。<br>
現在はポートフォリオの準備もできたので転職活動をしております。<br>
お問い合わせお待ちしております！<br><br>
趣味: 行ったことのない所に旅行にいく事、洋服の情報を集める事、勉強
</v-text>
                </v-flex>
            </v-layout>
        </v-container>
      </v-content>
    </v-app>
</template>
<style scoped>
img{
    width: calc(80px + 20vw);
    height: auto;
    border-radius: 100%;
}
@media screen and (max-width: 960px) {
.text[data-v-ced23842] {
    padding-top: 30px;
}
img{
    width: 200px;
    height: 200px;
    border-radius: 35%;
}
}
</style>