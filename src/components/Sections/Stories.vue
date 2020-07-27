<template>
  <v-parallax src="@/assets/paralax.svg">
    <div class="d-flex">
      <v-row>
        <v-spacer cols="3"/>
        <v-col cols="5" class="d-flex flex-column">
          <v-spacer />
          <v-card-text class="title-font pl-2">
            Stories
          </v-card-text>
          <v-card-text class="subtitle-font pl-2">
            Connect with other peoples experiences, stay updated with the latest
            events, learn new tips and tricks to keep you safe no matter the situation.
          </v-card-text>
          <v-spacer />
          <v-btn
            color="flaireBlack"
            class="flaireWhite--text ml-4 rounded-button"
            width="130"
          >View Stories</v-btn>
          <v-spacer />
        </v-col>
        <v-spacer cols="1"/>
        <v-col cols="5" v-if="this.$vuetify.breakpoint.mdAndUp">
          <v-img src="@/assets/stories-image.png" class="pic-offset"/>
        </v-col>
      </v-row>
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
.pic-offset {
  position: relative;
  right: -80px;
}
.rounded-button {
  border-radius: 10px;
}
</style>
