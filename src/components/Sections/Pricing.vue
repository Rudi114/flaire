<template>
  <v-card
    height="100vh"
    class="d-flex flex-column transparent background"
    elevation="0">
      <v-row class="d-flex">
        <v-spacer/>
        <div>
          <v-card-text class="text-center">
            Pricing
          </v-card-text>
          <v-card-text>
            Great things come at a cost but we make Flaire accessible to everyone
            with our two unique plans and the ability to gift to love ones.
          </v-card-text>
        </div>
        <v-spacer/>
      </v-row>
      <v-row class="d-flex justify-center">
        <basic />
        <v-card height="440" width="300" rounded="xl" class="card-border ml-3" elevation="8">
          <v-card-text>
            Basic
          </v-card-text>
        </v-card>
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
    url('../../assets/pricing-background.svg')
    0% 0%
    no-repeat
    padding-box;
}
.card-border {
  border: 2px solid #FF666D; //Primary Pink
}
</style>
