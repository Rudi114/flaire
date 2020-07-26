<template>
  <v-card
    height="80vh"
    class="transparent"
    elevation="0"
  >
    <v-row>
      <v-spacer />
      <v-col cols="10" class="d-flex flex-column">
        <v-card-text class="title-font flaireWhite--text text-center">
          Stories
        </v-card-text>
        <v-card-text class="subtitle-font flaireWhite--text text-center">
          Connect with other peoples experiences, stay updated with the latest
          events, learn new tips and tricks to keep you safe no matter the situation.
        </v-card-text>
        <v-spacer />
        <div class="d-flex mt-12">
          <v-spacer />
          <v-btn
            color="flaireBlack"
            class="flaireWhite--text"
            width="130"
          >View Stories</v-btn>
           <v-spacer />
        </div>
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
