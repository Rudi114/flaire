<template>
  <v-parallax src="@/assets/paralax.svg">
    <div class="d-flex">
      <v-spacer/>
      <div class="d-flex" cols="12">
        <v-img width="200" src="@/assets/iphone.png" />
        <v-card
          elevation="0"
          class="transparent d-flex flex-column"
          width="400"
        >
          <v-spacer/>
          <h4 class="title-font flaireWhite--text pl-4">Our App</h4>
          <v-card-text width="100" class="flaireWhite--text subtitle-font">
            With Flaire's voice and gesture activation you
            can send for help discretely in any situation. Feel
            safe everywhere with the Flaire app in your pocket.
          </v-card-text>
          <v-spacer/>
        </v-card>
      </div>
      <v-spacer/>
    </div>
  </v-parallax>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
@font-face {
  font-family: "BetoMedium";
  src: url("../../assets/fonts/Beto/BwBeto-Medium.otf") format("opentype");
}
@font-face {
  font-family: "Hero";
  src: url("../../assets/fonts/HeroNew/HeroNewRegular.otf") format("opentype");
}
.title-font {
  font-family: BetoMedium;
  font-size: 40px;
}
.subtitle-font {
  font-family: Hero;
}
</style>
