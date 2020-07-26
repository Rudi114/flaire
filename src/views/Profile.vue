<template>
  <v-card
    min-height="100vh"
    color="primaryRed"
    tile
    :class="this.$vuetify.breakpoint.mdAndUp ? 'background' : ''"
  >

  </v-card>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.background {
  background:
    transparent
    url('../assets/profile-background.svg')
    no-repeat;
  background-size: 50vw 50vh;
  background-position: 66vw 20vh;
}
</style>