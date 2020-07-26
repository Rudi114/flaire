<template>
  <flaire-card 
    class="ml-2"
    width="270" 
    height="350"
  >
  <v-card-actions class="justify-center d-flex flex-column">
    <v-subheader 
    class="text-center mt-6"
    > $4.99</v-subheader>
    <v-card-title 
    class="text-center beto-bold-font"
    > Premium </v-card-title>
    <v-btn
    color="flaireBlack"
    width="100"
    height="45"
    class="flaireWhite--text rounded-button mx-12 mt-15 mb-10"
    >Upgrade</v-btn>
    <v-btn text class="text-center subtitle-font" @click="_setGift(true)">
    <u>SEND AS A GIFT?</u>
    </v-btn>
  </v-card-actions>
  </flaire-card>
</template> 

<script>
import FlaireCard from '@/components/Global/FlaireCard.vue';

export default {
  components: {
    FlaireCard,
  }
}
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
@font-face {
  font-family: "BetoBold";
  src: url("../../assets/fonts/Beto/BwBeto-Bold.otf") format("opentype");
}
.beto-font {
  font-family: BetoMedium;
  font-size: 22px;
}
.hero-font {
  font-family: Hero;
  font-size: 11px;
}
.beto-bold-font {
  font-family: BetoBold;
  font-size: 40px;
}
.rounded-button {
  border-radius: 10px;
}

</style>