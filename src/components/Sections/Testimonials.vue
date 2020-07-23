<template>
  <v-card
    height="100vh"
    class="d-flex flex-column transparent"
    :class="this.$vuetify.breakpoint.mdAndUp ? 'background' : ''"
    elevation="0"
  >
    <v-row>
      <v-spacer />
      <v-col>
        <v-card-text class="text-center title-font flaireWhite--text">
          Testimonials
        </v-card-text>
        <v-card-text class="subtitle-font flaireWhite--text">
          Here's what people are saying about us.
          Don't take our word for it, take theirs.
        </v-card-text>
      </v-col>
      <v-spacer />
    </v-row>
    <v-row class="d-flex justify-space-around">

      <flaire-card width="300" height="300">
        <v-card class="ma-6" width="50" height="50" id="card-border">
          <v-icon>mdi-account</v-icon>
        </v-card>
        <v-card-text class="card-title">
          Name of Person
        </v-card-text>
        <v-card-text class="card-subtitle flaireBlack-text">
         Lorem ipsum dolor sit amet, consetetur sadipscing
         elitr, sed diam nonumy eirmod tempor invidunt ut
         labore et Lorem ipsum dolor sit amet, consetetur
        </v-card-text>
      </flaire-card>
      <flaire-card width="300" height="300">
        <v-card class="ma-6" width="50" height="50" id="card-border">
          <v-icon>mdi-account</v-icon>
        </v-card>
        <v-card-text>
          Name of Person
        </v-card-text>
        <v-card-text class="flaireBlack-text">
         Lorem ipsum dolor sit amet, consetetur sadipscing
         elitr, sed diam nonumy eirmod tempor invidunt ut
         labore et Lorem ipsum dolor sit amet, consetetur
        </v-card-text>
      </flaire-card>
      <flaire-card width="300" height="300">
        <v-card class="ma-6" width="50" height="50" id="card-border">
          <v-icon>mdi-account</v-icon>
        </v-card>
        <v-card-text>
          Name of Person
        </v-card-text>
        <v-card-text class="flaireBlack-text">
         Lorem ipsum dolor sit amet, consetetur sadipscing
         elitr, sed diam nonumy eirmod tempor invidunt ut
         labore et Lorem ipsum dolor sit amet, consetetur
        </v-card-text>
      </flaire-card>
    </v-row>
  </v-card>
</template>
<script>
import FlaireCard from '@/components/Global/FlaireCard.vue';

export default {
  components: {
    FlaireCard,
  },
};
</script>
<style lang="scss" scoped>
.background {
  background:
    transparent
    url('../../assets/testimonials-background.svg')
    no-repeat;
  background-size: 25vw 25vh;
  background-position: -1vw 5vh;
}
@font-face {
  font-family: "BetoMedium";
  src: url("../../assets/fonts/Beto/BwBeto-Medium.otf") format("opentype");
}
@font-face {
  font-family: "Hero";
  src: url("../../assets/fonts/HeroNew/HeroNewMedium.otf") format("opentype");
}
@font-face {
  font-family: "HeroRegular";
  src: url("../../assets/fonts/HeroNew/HeroNewRegular.otf") format("opentype");
}
.title-font {
  font-family: BetoMedium;
  font-size: 40px;
}
.subtitle-font {
  font-family: Hero;
}
.card-title {
  font-family: HeroRegular;
}
.cared-subtitle {
  font-family: Hero;
}
#card-border {
  border: 2px solid #FF666D; //Primary Pink
}
</style>
