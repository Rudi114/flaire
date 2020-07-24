<template>
  <v-card
    height="100vh"
    class="transparent"
    elevation="0"
  >
    <div class="d-flex">
      <v-row>
        <v-spacer cols="2"/>
        <v-col cols="4" class="d-flex flex-column">
          <v-spacer />
          <v-card-text class="title-font">
            Stories
          </v-card-text>
          <v-card-text class="subtitle-font">
            Connect with other peoples experiences, stay updated with the latest
            events, learn new tips and tricks to keep you safe no matter the situation.
          </v-card-text>
          <v-spacer />
          <v-btn
            color="flaireBlack"
            class="flaireWhite--text ml-4"
            width="130"
          >View Stories</v-btn>
          <v-spacer />
        </v-col>
        <v-col cols="6" v-if="this.$vuetify.breakpoint.mdAndUp">
          <v-img src="@/assets/stories-image.png" width="700" style="padding: 0 -610px 0 0"/>
        </v-col>
      </v-row>
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
