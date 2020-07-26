<template>
  <v-card height="100vh" color="primaryRed" class="background d-flex flex-column">
    <v-spacer/>
    <v-row align-contents="center">
      <v-col>
      </v-col>
      <v-col class="d-flex">
        <v-spacer/>
        <flaire-card width="400" height="500">
        </flaire-card>
        <v-spacer/>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import FlaireCard from '@/components/Global/FlaireCard.vue';
export default {
  components: {
    FlaireCard,
  }
}
</script>
<style lang="scss" scoped>
.background {
  background:
    transparent
    url('../assets/password-forgot-background.svg')
    no-repeat;
  background-size: 40vw 40vh;
  background-position: -3vw 25vh;
}
</style>
