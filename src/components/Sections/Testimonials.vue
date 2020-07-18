<template>
  <v-card
    height="100vh"
    class="d-flex flex-column transparent background"
    elevation="0"
  >
    <v-row>
      <v-img
        width="100"
        src="@/assets/testimonials-background.svg"
      />
      <v-spacer />
      <v-col>
        <v-card-text class="text-center">
          Testimonials
        </v-card-text>
        <v-card-text>
          Here's what people are saying about us.
          Don't take our word for it, take theirs.
        </v-card-text>
      </v-col>
      <v-spacer />
    </v-row>
    <v-row class="d-flex justify-space-around">

      <flaire-card width="300" height="300">
        <v-card class="ma-6" width="50" height="50">
          <v-icon>mdi-account</v-icon>
        </v-card>
        <v-card-text>
          Name of Person
        </v-card-text>
        <v-card-text>
         Lorem ipsum dolor sit amet, consetetur sadipscing
         elitr, sed diam nonumy eirmod tempor invidunt ut
         labore et Lorem ipsum dolor sit amet, consetetur
        </v-card-text>
      </flaire-card>
      <flaire-card width="300" height="300">
        <v-card class="ma-6" width="50" height="50">
          <v-icon>mdi-account</v-icon>
        </v-card>
        <v-card-text>
          Name of Person
        </v-card-text>
        <v-card-text>
         Lorem ipsum dolor sit amet, consetetur sadipscing
         elitr, sed diam nonumy eirmod tempor invidunt ut
         labore et Lorem ipsum dolor sit amet, consetetur
        </v-card-text>
      </flaire-card>
      <flaire-card width="300" height="300">
        <v-card class="ma-6" width="50" height="50">
          <v-icon>mdi-account</v-icon>
        </v-card>
        <v-card-text>
          Name of Person
        </v-card-text>
        <v-card-text>
         Lorem ipsum dolor sit amet, consetetur sadipscing
         elitr, sed diam nonumy eirmod tempor invidunt ut
         labore et Lorem ipsum dolor sit amet, consetetur
        </v-card-text>
      </flaire-card>
    </v-row>
  </v-card>
</template>
<script>
import FlaireCard from '@/components/Global/FlaireCard.vue';

export default {
  components: {
    FlaireCard,
  },
};
</script>
