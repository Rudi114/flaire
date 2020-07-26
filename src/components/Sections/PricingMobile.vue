<template>
  <v-card
    height="180vh"
    class="d-flex flex-column transparent"
    :class="this.$vuetify.breakpoint.mdAndUp ? 'background' : ''"
    elevation="0"
  >
    <v-spacer/>
    <v-container>
      <v-row>
        <v-col>
          <v-card-text class="title-font flaireWhite--text text-center">
            Pricing
          </v-card-text>
          <v-card-text class="testing subtitle-font flaireWhite--text text-center">
            Great things come at a cost but we make Flaire accessible to everyone
            with our two unique plans and the ability to gift to love ones.
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
    <v-spacer/>
    <v-container class="mb-16">
      <v-row justify="center" class="mb-8">
        <basic />
      </v-row>
      <v-row justify="center">
        <premium />
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import Basic from '@/components/Pricing/Basic.vue';
import Premium from '@/components/Pricing/Premium.vue';

export default {
  components: {
    Basic,
    Premium,
  },
};
</script>
<style lang="scss" scoped>
.background {
  background-image:
    url('../../assets/pricing-background.svg'),
    url('../../assets/pricing-background-branch.svg')
  ;
  background-position: -12vw 5vh, 62vw 0vh;
  background-size: 125vw 125vh, 40vw 40vh;
}

.card-border {
  border: 2px solid #FF666D; //Primary Pink
}
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
