<template>
  <v-card
    class="d-flex flex-column background"
    tile
    color="secondaryRed"
    elevation="0"
  >
    <v-row>
      <v-col>
        <v-row>
          <v-spacer cols="2"/>
          <v-col cols="4" class="ml-8">
            <v-img width="120px" src="@/assets/app-store-tag.svg"/>
          </v-col>
          <v-col cols="5">
            <v-img width="130px" src="@/assets/google-store-tag.svg"/>
          </v-col>
          <v-spacer cols="1"/>
        </v-row>
        <v-row class="d-flex" align="center">
          <v-col class="d-flex py-0">
            <v-icon large color="flaireWhite" class="mx-1">
              mdi-instagram
            </v-icon>
            <v-icon large color="flaireWhite" class="mx-1">
              mdi-facebook
            </v-icon>
            <v-icon large color="flaireWhite" class="mx-1">
              mdi-twitter
            </v-icon>
          </v-col>
          <v-col  class="pa-0 ma-0">
            <v-card-text class="d-flex flex-shrink-1 justify-center pa-0">
              <span>
                Built by
              </span>
              <a href="https://westandfaring.com/">West&Faring</a>
            </v-card-text>
          </v-col>
          <v-col class="pa-0">
            <v-card-text class="d-flex align-center justify-center pa-0 ma-0 flaireBlack--text">
              &copy; {{ new Date().getFullYear() }}
            </v-card-text>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>
<style lang="scss">
</style>
