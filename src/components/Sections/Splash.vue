<template>
  <v-card
    height="100vh"
    class="d-flex flex-column transparent"
    :class="this.$vuetify.breakpoint.mdAndUp ? 'background' : ''"
    elevation="0"
  >
    <v-container>
      <v-row v-if="this.$vuetify.breakpoint.smAndDown" class="mt-4">
        <v-spacer cols="1"/>
        <v-col cols="5" class="ml-6">
          <v-img src="../../assets/logo.svg" max-width="200" class="mobileLogo"></v-img>
        </v-col>
        <v-col cols="4" class="mt-1 d-flex align-center">
          <v-btn
            text
            class="ml-6 flaireWhite--text text-font"
            @click="_setSignUp(true)"
          >{{ _auth ? 'Log Out' : 'Log In' }}</v-btn>
        </v-col>
        <v-spacer cols="1"/>
      </v-row>
    </v-container>
    <v-row>
      <v-spacer cols="2"/>
      <v-col cols="9" class="d-flex flex-column">
        <v-spacer/>
        <v-card-text class="ml-0">
          <span class="title-font flaireWhite--text">
            Empowering
          </span>
          <br>
          <span class="subtitle-font flaireWhite--text">
            Safety
          </span>
        </v-card-text>
        <v-card-text
          class="text-font flaireWhite--text"
          :class="this.$vuetify.breakpoint.smAndDown ? 'pt-8' : ''"
        >
          Discretely notify emergency contacts in any situation.
        </v-card-text>
        <v-spacer />
        <v-btn
          color="flaireBlack"
          class="flaireWhite--text ml-4 rounded-button"
          :width="this.$vuetify.breakpoint.smAndDown ? 180 : 125"
          :height="this.$vuetify.breakpoint.smAndDown ? 50 : 45"
        >Try it Free</v-btn>
        <v-spacer/>
      </v-col>
      <v-spacer />
    </v-row>
  </v-card>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
  methods: {
    ...mapMutations({
      _setSignUp: "state/setSignUp",
    })
  },
  computed: {
    ...mapGetters({
      _auth: "authentication/getAuthenticated"
    })
  }
};
</script>
<style lang="scss" scoped>
.background {
  background:
    transparent
    url('../../assets/splash-page-background.svg')
    no-repeat;
  background-size: 200vw 130vh;
  background-position: -40vw -35vh;
}
@font-face {
  font-family: "BetoBold";
  src: url("../../assets/fonts/Beto/BwBeto-Bold.otf") format("opentype");
}
@font-face {
  font-family: "BetoLight";
  src: url("../../assets/fonts/Beto/BwBeto-Light.otf") format("opentype");
}
@font-face {
  font-family: "Hero";
  src: url("../../assets/fonts/HeroNew/HeroNewRegular.otf") format("opentype");
}
.title-font {
  font-family: BetoLight;
  font-size: 66px;
  line-height: 80px;
}
.subtitle-font {
  font-family: BetoBold;
  font-size: 66px;
  line-height: 80px;
}
.text-font {
  font-family: Hero;
}

@media screen and (max-width: 960px) {
  .title-font {
    font-size: 40px;
    line-height: 60px;
  }
}
.subtitle-font {
  font-size: 50px;
  line-height: 60px;
}
.rounded-button {
  border-radius: 10px;
}
</style>
