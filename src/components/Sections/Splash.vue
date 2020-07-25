<template>
  <v-card
    height="100vh"
    class="d-flex flex-column transparent"
    :class="this.$vuetify.breakpoint.mdAndUp ? 'background' : ''"
    elevation="0"
  >
    <v-row>
      <v-spacer cols="2"/>
      <v-col cols="9" class="d-flex flex-column">
        <v-spacer/>
        <v-card-text class="ml-0">
          <span class="title-font flaireWhite--text">
            Empowering
          </span>
          <br>
          <span class="subtitle-font flaireWhite--text">
            Safety
          </span>
        </v-card-text>
        <v-card-text
          class="text-font flaireWhite--text"
          :class="this.$vuetify.breakpoint.smAndDown ? 'pt-8' : ''"
        >
          Discretely notify emergency contacts in any situation.
        </v-card-text>
        <v-spacer />
        <v-btn
          color="flaireBlack"
          class="flaireWhite--text ml-4"
          :width="this.$vuetify.breakpoint.smAndDown ? 180 : 130"
          :height="this.$vuetify.breakpoint.smAndDown ? 50 : 40"
        >Try it Free</v-btn>
        <v-spacer/>
      </v-col>
      <v-spacer />
    </v-row>
  </v-card>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
.background {
  background:
    transparent
    url('../../assets/splash-page-background.svg')
    no-repeat;
  background-size: 200vw 130vh;
  background-position: -46vw -35vh;
}
@font-face {
  font-family: "BetoBold";
  src: url("../../assets/fonts/Beto/BwBeto-Bold.otf") format("opentype");
}
@font-face {
  font-family: "BetoLight";
  src: url("../../assets/fonts/Beto/BwBeto-Light.otf") format("opentype");
}
@font-face {
  font-family: "Hero";
  src: url("../../assets/fonts/HeroNew/HeroNewRegular.otf") format("opentype");
}
.title-font {
  font-family: BetoLight;
  font-size: 66px;
  line-height: 80px;
}
.subtitle-font {
  font-family: BetoBold;
  font-size: 66px;
  line-height: 80px;
}
.text-font {
  font-family: Hero;
}

@media screen and (max-width: 960px) {
  .title-font {
  font-size: 40px;
  line-height: 60px;
}
.subtitle-font {
  font-size: 50px;
  line-height: 60px;
}
}
</style>
