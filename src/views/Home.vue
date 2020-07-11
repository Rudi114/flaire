<template>
  <v-card color="primaryRed">
    <v-card height="100vh" class="d-flex flex-column transparent" elevation="0">
      <v-row>
        <v-col class="d-flex flex-column">
          <v-spacer/>
          <v-card-text>
            Empowering Safety
          </v-card-text>
          <v-card-text>
            Discretely notify emergency contacts in any situation.
          </v-card-text>
          <v-btn
            color="flaireBlack"
            class="flaireWhite--text"
            width="130"
          >Try it Free</v-btn>
          <v-spacer/>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-card>
    <template>
      <v-parallax src="../assets/paralax.svg">
        <div class="d-flex">
          <v-spacer/>
          <div class="text-center d-flex" cols="12">
            <v-img width="200" src="../assets/iphone.png"></v-img>
            <v-card elevation="0" class="transparent d-flex flex-column" width="300">
              <v-spacer/>
              <h4 class="subheading">Our App</h4>
              <v-card-text width="100">
                With Flaire's voice and gesture activation you can send for help discretely
                in any situation. Feel safe everywhere with the Flaire app in your pocket.
              </v-card-text>
              <v-spacer/>
            </v-card>
          </div>
          <v-spacer/>
        </div>
      </v-parallax>
    </template>
    <v-card height="100vh" class="d-flex flex-column transparent" elevation="0">
      <v-spacer />
      <v-card-text>
        Empowering Safety
      </v-card-text>
      <v-spacer />
    </v-card>
  </v-card>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
};
</script>
