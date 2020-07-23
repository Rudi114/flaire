<template>
  <v-app-bar color="white" fixed class="transparent" elevation="0">
    <v-spacer cols="3"/>
    <v-col class="d-flex px-0 align-center" cols="9">
      <div>
        <v-card-title class="px-0">
          <v-img src="../assets/logo.svg" width="100"></v-img>
        </v-card-title>
      </div>
      <v-spacer />
      <v-btn text class="flaireWhite--text title-font">
        Resources
      </v-btn>
      <v-btn text class="flaireWhite--text title-font">
        Pricing
      </v-btn>
      <v-btn text class="mr-3 flaireWhite--text title-font">
        Blog
      </v-btn>
      <v-divider vertical color="white" class="my-2"/>
      <v-btn text class="ml-3 flaireWhite--text title-font">
        Log In
      </v-btn>
    </v-col>
    <v-spacer />
  </v-app-bar>
</template>
<style lang="scss" scoped>
.transparent {
  background: rgba(255,255,255,0.2);
  // filter: blur(8px);
}
@font-face {
  font-family: "Hero";
  src: url("../assets/fonts/HeroNew/HeroNewMedium.otf") format("opentype");
}
.title-font {
  font-family: Hero;
  font-size: 66px;
  line-height: 80px;
}
</style>
