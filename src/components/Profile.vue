<template>
  <div>
    <v-card
    v-if="this.$vuetify.breakpoint.mdAndUp"
      min-height="100vh"
      color="primaryRed"
      tile
      class="d-flex flex-column background"
    >
      <v-row>
        <v-spacer cols="2"/>
        <v-col cols="9" class="ml-10">
          <v-row class="mt-10 ml-0" align="start" justify="start">
            <v-col cols="9" class="mt-16 pl-0 pb-0">
              <v-card-title 
                class="flaireWhite--text beto-font pl-0"
              > Hello "Name"! </v-card-title>
              <v-subheader
                class="flaireWhite--text hero-font mb-10 pl-0"
              >
                Switch between plans hassle free anytime. 
                Whatever works with your budget works with us.
              </v-subheader>
              <v-spacer/>
            </v-col>
            <v-spacer cols="3"></v-spacer>
          </v-row>
          <v-row/>
          <v-row class="d-flex ml-0">
            <spacer cols="1"/>
            <v-col cols="11" class="pb-0">
              <v-row>
                <spacer />
                <profile-basic class="mr-4"/>
                <profile-premium class="ml-4 mb-4"/>
                <spacer />
              </v-row>
            </v-col>
          </v-row>
          <v-row/>
          <v-row> 
            <v-col>
              <div class="d-flex justify-end">
                <div cols="2">
                  <v-btn
                    text
                    class="text-center hero-font flaireWhite--text"
                    @click="_setPromo(true)"
                  >
                    <u>Add Promo Code</u>
                  </v-btn>
                </div>
                <div cols="2"> 
                  <v-btn 
                    text 
                    class="text-center hero-font flaireWhite--text"
                    @click="_setCard(true)"
                  >
                    <u>{{ card ? `Delete My Card` : `Add A Card`}}</u>
                  </v-btn>
                </div> 
              </div>
            </v-col>
          </v-row> 
        </v-col> 
        <v-spacer cols="1"/>
      </v-row>
    </v-card>
    <v-card
      v-if="this.$vuetify.breakpoint.smAndDown"
      min-height="100vh"
      color="primaryRed"
      tile
      class="d-flex flex-column"
    >
      <v-container>
        <v-row v-if="this.$vuetify.breakpoint.smAndDown" class="mt-4">
          <v-spacer cols="1"/>
          <v-col cols="5" class="ml-6">
            <v-img src="../assets/logo.svg" max-width="200" class="mobileLogo"></v-img>
          </v-col>
          <v-col cols="4" class="mt-1 d-flex align-center">
            <v-btn
              text
              class="ml-6 flaireWhite--text"
              @click="_setAuth(false)"
            >Log Out</v-btn>
          </v-col>
          <v-spacer cols="1"/>
        </v-row>
      </v-container>
      <v-row class="mt-0" align="start" justify="start">
        <v-spacer cols="1"/>
        <v-col cols="9" class="mt-16 ">
          <v-card-text 
            class="flaireWhite--text beto-font pl-5"
          >Hello "Name"!</v-card-text>
          <v-subheader
            class="flaireWhite--text hero-font mb-10 pl-6"
          >
            Switch between plans hassle free anytime. 
            Whatever works with your budget works with us.
          </v-subheader>
          <v-spacer/>
        </v-col>
        <v-spacer cols="1"></v-spacer>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col cols="8">
          <profile-basic/>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-spacer cols="1"/>
        <v-col cols="8" >
          <profile-premium/>
        </v-col>
        <v-spacer cols="1"/>
      </v-row>
      <v-row align="center"> 
        <v-spacer cols="1" />
        <v-col cols="8">
          <div class="d-flex">
            <div cols="2">
              <v-btn
                text
                class="text-center hero-font flaireWhite--text"
                @click="_setPromo(true)"
              >
                <u>Add Promo Code</u>
              </v-btn>
            </div>
            <div cols="2"> 
              <v-btn 
                text 
                class="text-center hero-font flaireWhite--text"
                @click="_setCard(true)"
              >
                <u>{{ card ? `Delete My Card` : `Add A Card`}}</u>
              </v-btn>
            </div> 
          </div>
        </v-col>
        <v-spacer cols="1" />
      </v-row> 
    </v-card>
  </div>
</template>
<script>

import FlaireCard from '@/components/Global/FlaireCard.vue';
import ProfileBasic from '@/components/Pricing/ProfileBasic.vue';
import ProfilePremium from '@/components/Pricing/ProfilePremium.vue';
import { mapMutations } from 'vuex';
export default {
  components: {
    FlaireCard,
    ProfilePremium,
    ProfileBasic
  },
  methods: {
    ...mapMutations({
      _setCard: "state/setCard",
      _setPromo: "state/setPromo",
      _setSignUp: "state/setSignUp",
      _setAuth: "authentication/setAuthenticated"
    })
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