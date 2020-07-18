<template>
  <v-parallax src="@/assets/paralax.svg">
    <div class="d-flex">
      <v-spacer/>
      <div class="text-center d-flex" cols="12">
        <v-img width="200" src="@/assets/iphone.png" />
        <v-card
          elevation="0"
          class="transparent d-flex flex-column"
          width="300"
        >
          <v-spacer/>
          <h4 class="subheading">Our App</h4>
          <v-card-text width="100">
            With Flaire's voice and gesture activation you
            can send for help discretelyin any situation. Feel
            safe everywhere with the Flaire app in your pocket.
          </v-card-text>
          <v-spacer/>
        </v-card>
      </div>
      <v-spacer/>
    </div>
  </v-parallax>
</template>
<script>
export default {

};
</script>
