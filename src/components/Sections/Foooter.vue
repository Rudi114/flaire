<template>
  <v-card
    height="10vh"
    class="d-flex flex-column background"
    tile
    color="secondaryRed"
    elevation="0"
  >
    <v-row class="d-flex justify-space-around flex-shrink-1">
      <v-col>
        <v-icon>
          mdi-instagram
        </v-icon>
        <v-icon>
          mdi-facebook
        </v-icon>
        <v-icon>
          mdi-twitter
        </v-icon>
      </v-col>
      <v-spacer />
      <v-col>
        <v-card-text class="flex-shrink-1">
          Built by
            <a href="https://westandfaring.com/">West&Faring</a>
        </v-card-text>
      </v-col>
      <v-spacer />
      <v-col>
        <div>&copy; {{ new Date().getFullYear() }}</div>
      </v-col>
      <v-spacer v-if="this.$vuetify.breakpoint.smAndDown"/>
      <v-col v-if="this.$vuetify.breakpoint.smAndDown">
        <v-img width="90" src="@/assets/app-store-tag.svg"/>
        <v-img width="100px" src="@/assets/google-store-tag.svg"/>
      </v-col>
    </v-row>
  </v-card>
</template>
