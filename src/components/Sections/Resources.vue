<template>
  <v-card
    :height="this.$vuetify.breakpoint.mdAndUp ? '100vh' : '130vh'"
    class="d-flex flex-column transparent"
    :class="this.$vuetify.breakpoint.mdAndUp ? 'background' : ''"
    elevation="0"
  >
    <v-row class="d-flex">
      <v-spacer v-if="this.$vuetify.breakpoint.mdAndUp"/>
      <div>
        <v-card-text class="text-center title-font flaireWhite--text">
          Resourses
        </v-card-text>
        <v-card-text
          class="subtitle-font flaireWhite--text"
          :class="this.$vuetify.breakpoint.smAndDown ? 'text-center' : ''"
        >
          Here are a few of our favorite companies and
          organizations that are helping us support our mission.
        </v-card-text>
      </div>
      <v-spacer v-if="this.$vuetify.breakpoint.mdAndUp"/>
    </v-row>
    <flaire-card width="400" height="300" class="">
      <v-img src="@/assets/RAINN_Logo.png" class="rainn"></v-img>
    </flaire-card>
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
    url('../../assets/resources-background.svg')
    no-repeat;
  background-size: 150vw 150vh;
  background-position: -29vw -25vh;
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
.rainn {
  width: 200px;
  height: auto;
}
</style>
