<template>
  <flaire-card height="390" width="300">
    <v-card-text class="text-center pt-12 pb-2 title-font flaireBlack--text">
      Basic
    </v-card-text>
    <v-card-text class="text-center pt-0 subtitle-font">
      Free Forever
    </v-card-text>
    <div class="d-flex flex-column">
      <div class="d-flex">
        <v-card-text class="ml-3 py-2">
          Code Word Support
        </v-card-text>
        <v-icon class="mr-6 px-1" color="flaireBlack">mdi-checkbox-marked-circle</v-icon>
      </div>
      <div class="d-flex">
        <v-card-text class="ml-3 py-2">
          Add Contacts
        </v-card-text>
        <v-icon class="mr-6 px-1" color="flaireBlack">mdi-checkbox-marked-circle</v-icon>
      </div>
      <div class="d-flex">
        <v-card-text class="ml-3 py-2">
          One use per week
        </v-card-text>
        <v-icon class="mr-6 px-1" color="flaireBlack">mdi-checkbox-marked-circle</v-icon>
      </div>
      <div class="d-flex">
        <v-card-text class="ml-3 py-2">
          Voice Activation
        </v-card-text>
        <v-icon class="mr-6 px-1" color="flaireBlack">mdi-checkbox-marked-circle</v-icon>
      </div>
      <div class="d-flex">
        <v-card-text class="ml-3 py-2">
          Add Friends
        </v-card-text>
        <v-icon class="mr-6 px-1" color="flaireBlack">mdi-checkbox-marked-circle</v-icon>
      </div>
      <div class="d-flex">
        <v-card-text class="ml-3 py-2">
          Unlimited use
        </v-card-text>
        <v-icon class="mr-6 px-1" color="flaireBlack">mdi-checkbox-blank-circle-outline</v-icon>
      </div>
    </div>
  </flaire-card>
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
@font-face {
  font-family: "BetoBold";
  src: url("../../assets/fonts/Beto/BwBeto-Bold.otf") format("opentype");
}
@font-face {
  font-family: "Hero";
  src: url("../../assets/fonts/HeroNew/HeroNewMedium.otf") format("opentype");
}
.title-font {
  font-family: BetoBold;
  font-size: 22px;
}
.subtitle-font {
  font-family: Hero;
  font-size: 11px;
}
</style>
