<template>
  <v-card
    height="100vh"
    class="d-flex flex-column transparent"
    :class="this.$vuetify.breakpoint.mdAndUp ? 'background' : ''"
    elevation="0">
      <v-row class="d-flex">
        <v-spacer/>
        <div>
          <v-card-text class="text-center title-font flaireWhite--text">
            Pricing
          </v-card-text>
          <v-card-text class="testing subtitle-font flaireWhite--text">
            Great things come at a cost but we make Flaire accessible to everyone
            with our two unique plans and the ability to gift to love ones.
          </v-card-text>
        </div>
        <v-spacer/>
      </v-row>
      <v-row class="d-flex justify-center">
        <basic />
        <premium />
      </v-row>
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
  background-position: -10vw -15vh, 72vw -10vh;
  background-size: 115vw 115vh, 30vw 30vh;
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
