<template>
  <v-card
    class="d-flex flex-column transparent"
    :class="this.$vuetify.breakpoint.mdAndUp ? 'background' : ''"
    elevation="0"
  >
    <v-row>
      <v-col class="d-flex flex-column">
        <v-card-text class="text-center title-font flaireWhite--text">
          Resourses
        </v-card-text>
        <v-card-text
          class="subtitle-font flaireWhite--text text-center"
          :class="this.$vuetify.breakpoint.smAndDown ? 'text-center' : ''"
        >
          Here are a few of our favorite companies and
          organizations that are helping us support our mission.
        </v-card-text>
      </v-col>
    </v-row>
    <v-row justify="center" align="end">
      <resources-card :width="400" :height="280">
        <v-img src="@/assets/RAINN-logo.png"></v-img>
      </resources-card>
      <resources-card :width="400" :height="280">
        <v-img src="@/assets/OWH-logo.png"></v-img>
      </resources-card>
      <resources-card  :width="400" :height="280">
        <v-img src="@/assets/NCADV-logo.png"></v-img>
      </resources-card>
      <resources-card :width="400" :height="280">
        <v-img src="@/assets/mee-too-logo.png"></v-img>
      </resources-card>
      <resources-card  :width="400" :height="280">
        <v-img src="@/assets/times-up-logo.png"></v-img>
      </resources-card>
    </v-row>
    <v-spacer/>
  </v-card>
</template>
<script>
import ResourcesCard from '@/components/Global/ResourcesCard.vue';

export default {
  components: {
    ResourcesCard,
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
// .rainn {
//   width: 100px;
//   height: auto;
// }
</style>
