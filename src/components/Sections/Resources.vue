<template>
  <v-card
    :height="this.$vuetify.breakpoint.mdAndUp ? '150vh' : '130vh'"
    class="d-flex flex-column transparent"
    :class="this.$vuetify.breakpoint.mdAndUp ? 'background' : ''"
    elevation="0"
  >
    <v-row class="d-flex">
      <v-spacer cols="3" v-if="this.$vuetify.breakpoint.mdAndUp"/>
      <v-col cols="4">
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
      <v-spacer cols="3" v-if="this.$vuetify.breakpoint.mdAndUp"/>
    </v-row>
    <v-row justify="center" align="end">
      <resources-card width="400" height="280">
        <v-img src="@/assets/RAINN-logo.png"></v-img>
      </resources-card>
      <resources-card width="200" height="150">
        <v-img src="@/assets/OWH-logo.png"></v-img>
      </resources-card>
    </v-row>
    <v-container class="d-flex pa-0" dense>
      <v-row justify="center">
        <div class="ml-9">
          <resources-card width="200" height="150" class="ml-16">
            <v-img src="@/assets/NCADV-logo.png"></v-img>
          </resources-card>
        </div>
        <resources-card width="300" height="220" class="mr-0">
          <v-card-text>ME TOO</v-card-text>
        </resources-card>
      </v-row>
    </v-container>
    <v-row justify="center">
      <div class="ml-10">
        <div class="ml-16">
          <div class="ml-16">
            <resources-card width="200" height="150" class="ml-16 mr-0">
              <v-img src="@/assets/times-up-logo.png"></v-img>
            </resources-card>
          </div>
        </div>
      </div>
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
