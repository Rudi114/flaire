<template>
  <div>
    <v-card
      min-height="100vh"
      color="primaryRed"
      tile
      class="d-flex flex-column"
      :class="this.$vuetify.breakpoint.mdAndUp ? 'background' : ''"
    >
      <v-spacer/>
      <v-row class="mt-10" align="start" justify="start">
        <v-spacer cols="1"/>
        <v-col cols="11">
          <v-card-title 
            class="flaireWhite--text beto-font"
          > Hi "Name"! </v-card-title>
          <v-subheader
            class="flaireWhite--text hero-font mb-10"
          >
            Switch between plans hassle free anytime. 
            Whatever works with your budget works with us.
          </v-subheader>
          <v-row class="d-flex">
            <spacer cols="1"/>
            <v-col cols="8">
              <v-row>
                <spacer />
                <status-basic />
                <status-premium />
              <spacer />
              </v-row>
            </v-col>
            <spacer cols="7" />
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-spacer cols="9" />
        <v-col cols="3">
          <div class="d-flex">
            <div cols="2">
              <v-btn text class="text-center hero-font">
              <u>Add Promo Code</u>
              </v-btn>
            </div>
            <div cols="2"> 
              <v-btn 
                text 
                class="text-center hero-font"
                @click="_setCard(true)"
              >
              <u>{{ card ? `Delete My Card` : `Add A Card`}}</u>
              </v-btn>
            </div> 
          </div>
        </v-col>
      </v-row>  
      <v-spacer/>
    </v-card>
  </div>
</template>
<script>

import FlaireCard from '@/components/Global/FlaireCard.vue';
import StatusBasic from '@/components/Pricing/StatusBasic.vue';
import StatusPremium from '@/components/Pricing/StatusPremium.vue';
import { mapGetters, mapMutations } from 'vuex';
export default {
  components: {
    FlaireCard,
    StatusPremium,
    StatusBasic
  },
  methods: {
    ...mapMutations({
      _setCard: "state/setCard",
    })
  },
  computed: {
    
  }
}
</script>
<style lang="scss" scoped>
@font-face {
  font-family: "BetoMedium";
  src: url("../assets/fonts/Beto/BwBeto-Medium.otf") format("opentype");
}
@font-face {
  font-family: "Hero";
  src: url("../assets/fonts/HeroNew/HeroNewRegular.otf") format("opentype");
}
.beto-font {
  font-family: BetoMedium;
  font-size: 30px;
}
.hero-font {
  font-family: Hero;
  font-size: 11px;
}
.background {
  background:
    transparent
    url('../assets/profile-background.svg')
    no-repeat;
  background-size: 50vw 50vh;
  background-position: 66vw 20vh;
}
</style>