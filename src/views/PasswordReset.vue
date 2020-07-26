<template>
  <div>
    <v-card
      min-height="100vh"
      color="primaryRed"
      class="background d-flex flex-column"
      v-if="this.$vuetify.breakpoint.mdAndUp"
    >
      <v-spacer/>
      <v-row align-contents="center">
        <v-col>
        </v-col>
        <v-col class="d-flex">
          <v-spacer/>
          <flaire-card width="400" height="375">
            <v-card-actions class="justify-center d-flex flex-column">
              <v-card-title 
                class="mt-4 passReset-title-screen-font underline-color"
              > Password Reset </v-card-title>
              <v-subheader 
              class="passReset-screen-font mb-8 text-center"
              > Please enter your account email below</v-subheader>
            </v-card-actions>
            <v-text-field
              class="mx-9 passReset-screen-font"
              label="Email"
              persistent-hint="true"
              hint="Enter your account email"
              outlined
              :rules="[ rules.required, rules.emailMatch ]"
            ></v-text-field>
            <v-card-actions class="justify-center">
              <v-btn
                color="flaireBlack"
                width="100"
                height="45"
                class="flaireWhite--text passReset-screen-font rounded-button ma-6"
                @click="signUp"
              >Reset</v-btn>
            </v-card-actions>
          </flaire-card>
          <v-spacer/>
        </v-col>
      </v-row>
    </v-card>
    <v-card
      min-height="100vh"
      color="primaryRed"
      class="d-flex flex-column"
      v-if="this.$vuetify.breakpoint.smAndDown"

    >
      <v-spacer/>
      <v-row class="d-flex">
        <v-spacer/>
        <v-col>
          <flaire-card width="300" height="400" class="mt-16">
            <v-card-actions class="justify-center d-flex flex-column">
              <v-card-title 
                class="mt-4 pb-0 passReset-title-screen-font underline-color"
              > Password Reset </v-card-title>
              <v-subheader 
              class="passReset-screen-font mb-8 text-center"
              > Please enter your account email below</v-subheader>
            </v-card-actions>
            <v-text-field
              class="mx-7 mb-3 passReset-screen-font"
              label="Email"
              persistent-hint="true"
              hint="Enter your account email"
              outlined
              :rules="[ rules.required, rules.emailMatch ]"
            ></v-text-field>
            <v-card-actions class="justify-center">
              <v-btn
                color="flaireBlack"
                width="125"
                height="65"
                class="flaireWhite--text passReset-screen-font rounded-button ma-6"
                @click="signUp"
              >Reset</v-btn>
            </v-card-actions>
          </flaire-card>
        </v-col>
        <v-spacer/>
      </v-row>
      <v-spacer/>
    </v-card>
  </div>
</template>
<script>
import FlaireCard from '@/components/Global/FlaireCard.vue';

export default {
  components: {
    FlaireCard,
  },
  data() {
    return {
      rules: {
        required: (v) => 
          !!(v) || "Required",
        emailMatch: (v) =>
          new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(v) || "Invalid e-mail.",
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.background {
  background:
    transparent
    url('../assets/password-forgot-background.svg')
    no-repeat;
  background-size: 40vw 40vh;
  background-position: -3vw 25vh;
}
@font-face {
  font-family: 'HeroNew-Regular';
  src: url('../assets/fonts/HeroNew/HeroNewRegular.otf');
}
@font-face {
  font-family: 'HeroNew-Medium';
  src: url('../assets/fonts/HeroNew/HeroNewMedium.otf');
}
.passReset-title-screen-font {
  font-family: HeroNew-Medium;
  font-size: 30px;
}
.passReset-screen-font {
  font-family: HeroNew-Regular;
}
.rounded-card {
  border-radius: 30px;
}
.rounded-button {
  border-radius: 10px;
}
.underline-color{
  text-decoration: none;
  position: relative;
}
.underline-color:after {
    position: absolute;
    height: 2.5px;
    margin: auto;
    content: '';
    left: 0;
    right: 0;
    width: 90%;
    background-color: #EB5058;
    left: 0;
    bottom: -4px; /* adjust this to move up and down. you may have to adjust the line height of the paragraph if you move it down a lot. */
}
</style>


