<template>
  <v-card
    height="100vh"
    class="d-flex flex-column transparent background"
    elevation="0"
  >
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
      <v-col>

      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
.background {
  background:
    transparent
    url('../../assets/splash-page-background.svg')
    0% 0%
    no-repeat
    padding-box;
}
// .splash-background {
//   // top: -435.9999694824219px;
//   // left: -187.99996948242188px;
//   top: -420px;
//   left: -100;
// }
</style>
