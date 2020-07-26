<template>
  <v-card
    class="d-flex flex-column background"
    tile
    color="secondaryRed"
    elevation="0"
  >
    <v-row>
      <v-spacer cols="1"/>
      <v-col cols="1" class="d-flex flex-column justify-space-around align-center pa-0">
        <v-icon large color="flaireWhite" class="my-2">
          mdi-instagram
        </v-icon>
        <v-icon large color="flaireWhite" class="my-2">
          mdi-facebook
        </v-icon>
        <v-icon large color="flaireWhite" class="my-2">
          mdi-twitter
        </v-icon>
      </v-col>
      <v-spacer cols="1"/>
      <v-col cols="9">
        <v-row>
          <v-col>
            <v-img width="120px" src="@/assets/app-store-tag.svg"/>
          </v-col>
          <v-spacer/>
          <v-col>
            <v-img width="130px" src="@/assets/google-store-tag.svg"/>
          </v-col>
          <v-spacer/>
        </v-row>
        <v-row class="d-flex justify-space-around">
          <v-col cols="7" class="pa-0">
            <v-card-text class="d-flex flex-shrink-1 justify-center pb-0">
              <span>
                Built by
              </span>
              <br>
              <a href="https://westandfaring.com/">West&Faring</a>
            </v-card-text>
          </v-col>
          <v-col cols="5" class="d-flex align-center justify-center pb-0">
            <div>&copy; {{ new Date().getFullYear() }}</div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>
