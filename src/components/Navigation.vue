<template>
  <v-app-bar color="white" fixed class="transparent" elevation="0">
    <v-spacer cols="3"/>
    <v-col class="d-flex px-0 align-center" cols="9">
      <div>
        <v-card-title
          class="px-3"
          @click="scroll('#splash')"
        >
          <v-img src="../assets/logo.svg" width="120"></v-img>
        </v-card-title>
      </div>
      <v-spacer />
      <v-btn
        text
        class="flaireWhite--text title-font"
        @click="scroll('#resources')"
      >
        Resources
      </v-btn>
      <v-btn
        text
        class="flaireWhite--text title-font"
        @click="scroll('#pricing')"
      >
        Pricing
      </v-btn>
      <v-btn
        text
        class="mr-3 flaireWhite--text title-font"
        @click="scroll('#stories')"
      >
        Blog
      </v-btn>
      <v-divider vertical color="white" class="my-2"/>
      <v-btn
        text
        class="ml-3 flaireWhite--text title-font"
        @click="logIn"
      >
        {{ _auth ? 'Log Out' : 'Log In' }}
      </v-btn>
    </v-col>
    <v-spacer cols="3"/>
  </v-app-bar>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
  data() {
    return {
      scrollOptions: {
        duration: 1000,
        offset: 0,
        easing: 'linear',
      },
    };
  },
  computed: {
    ...mapGetters({
      _auth: "authentication/getAuthenticated"
    })
  },
  methods: {
    ...mapMutations({
      _setSignUp: "state/setSignUp",
      _setAuth: "authentication/setAuthenticated"
    }),
    scroll(type) {
      if (this.$route.name === 'Home') {
        this.$vuetify.goTo(type, this.scrollOptions);
      } else {
        this.$router.push('/')
          .then(() => {
            this.$vuetify.goTo(type, this.scrollOptions);
          });
      }
    },
    logIn() {
      if (this._auth) {
        this._setAuth(false);
      } else {
        this._setSignUp(true);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.transparent {
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(8px);
}
@font-face {
  font-family: "Hero";
  src: url("../assets/fonts/HeroNew/HeroNewMedium.otf") format("opentype");
}
.title-font {
  font-family: Hero;
}
</style>
