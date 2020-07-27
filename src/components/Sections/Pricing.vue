<template>
  <v-card
    class="d-flex flex-column transparent"
    :class="this.$vuetify.breakpoint.mdAndUp ? 'background' : ''"
    elevation="0"
  >
    <v-spacer/>
    <v-container>
      <v-row class="d-flex">
        <v-col cols="5" class="ml-14">
          <v-card-text class="title-font flaireWhite--text">
            Pricing
          </v-card-text>
          <v-card-text class="testing subtitle-font flaireWhite--text">
            Great things come at a cost but we make Flaire accessible to everyone
            with our two unique plans and the ability to gift to loved ones.
          </v-card-text>
        </v-col>
        <v-spacer cols="3" />
      </v-row>
    </v-container>
    <v-spacer/>
    <v-container class="mb-16">
      <v-row class="d-flex justify-center pb-4">
        <basic class="mr-4"/>
        <premium class="ml-4"/>
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
    url('../../assets/blob-pricing.svg'),
    url('../../assets/plant-pricing.svg'),
    url('../../assets/pricing-background-branch.svg')
  ;
  background-position: -18vw 0vh, -18vw 55vh,  72vw -6vh;
  background-size: 40vw 40vh, 70vw 70vh, 40vw 40vh;
}

@media only screen and (max-width: 1300px) {
  .background {
    background-image:
      url('../../assets/blob-pricing.svg'),
      url('../../assets/plant-pricing.svg'),
      url('../../assets/pricing-background-branch.svg')
    ;
    background-position: -18vw 0vh, -18vw 80vh,  72vw -6vh;
    background-size: 40vw 40vh, 70vw 70vh, 40vw 40vh;
  }
}

@media only screen and (max-width: 1130px) {
  .background {
    background-image:
      url('../../assets/blob-pricing.svg'),
      url('../../assets/plant-pricing.svg'),
      url('../../assets/pricing-background-branch.svg')
    ;
    background-position: -18vw 0vh, -18vw 105vh,  72vw -6vh;
    background-size: 40vw 40vh, 70vw 70vh, 40vw 40vh;
  }
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
