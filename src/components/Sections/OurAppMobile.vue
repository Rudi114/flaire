<template>
  <v-card
    class="transparent"
    elevation="0"
    height="100vh"
  >
    <div class="d-flex flex-column" cols="12">
      <v-card
        elevation="0"
        class="transparent d-flex flex-column"
        width="400"
      >
        <v-spacer/>
        <h4 class="title-font flaireWhite--text pl-4 text-center">Our App</h4>
        <div class="d-flex">
          <v-card-text width="100" class="flaireWhite--text subtitle-font text-center pb-10">
            With Flaire's voice and gesture activation you
            can send for help discretelyin any situation. Feel
            safe everywhere with the Flaire app in your pocket.
          </v-card-text>
        </div>
        <v-spacer/>
      </v-card>
      <div class="d-flex justify-center">
        <v-spacer />
        <v-img width="100" src="@/assets/iphone.png" />
        <v-spacer />
      </div>
    </div>
  </v-card>
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
