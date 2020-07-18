<template>
  <flaire-card height="440" width="300" class="ml-3">
    <v-card-text class="text-center pt-12 pb-2">
      Premium
    </v-card-text>
    <v-card-text class="text-center pt-0">
      4.99MTH
    </v-card-text>
    <div class="d-flex flex-column">
      <div class="d-flex">
        <v-card-text class="ml-3 py-2">
          Code Word Support
        </v-card-text>
        <v-icon class="mr-7" color="flaireBlack">mdi-checkbox-marked-circle</v-icon>
      </div>
      <div class="d-flex">
        <v-card-text class="ml-3 py-2">
          Add Contacts
        </v-card-text>
        <v-icon class="mr-7" color="flaireBlack">mdi-checkbox-marked-circle</v-icon>
      </div>
      <div class="d-flex">
        <v-card-text class="ml-3 py-2">
          One use per week
        </v-card-text>
        <v-icon class="mr-7" color="flaireBlack">mdi-checkbox-marked-circle</v-icon>
      </div>
      <div class="d-flex">
        <v-card-text class="ml-3 py-2">
          Voice Activation
        </v-card-text>
        <v-icon class="mr-7" color="flaireBlack">mdi-checkbox-marked-circle</v-icon>
      </div>
      <div class="d-flex">
        <v-card-text class="ml-3 py-2">
          Add Friends
        </v-card-text>
        <v-icon class="mr-7" color="flaireBlack">mdi-checkbox-marked-circle</v-icon>
      </div>
      <div class="d-flex">
        <v-card-text class="ml-3 py-2">
          Unlimited use
        </v-card-text>
        <v-icon class="mr-7" color="flaireBlack">mdi-checkbox-marked-circle</v-icon>
      </div>
    </div>
    <v-card-text class="text-center">
      SEND AS A GIFT?
    </v-card-text>
  </flaire-card>
</template>
<script>
import FlaireCard from '@/components/Global/FlaireCard.vue';

export default {
  components: {
    FlaireCard,
  },
};
</script>
