<template>
  <flaire-card :width="width" :height="height" class="d-flex flex-column ma-4">
    <v-spacer/>
    <v-row class="d-flex" align="center">
      <v-spacer cols="3"/>
      <v-col cols="6">
        <v-row>
          <slot></slot>
        </v-row>
      </v-col>
      <v-spacer cols="3"/>
    </v-row>
    <v-spacer/>
  </flaire-card>
</template>
<script>
import FlaireCard from '@/components/Global/FlaireCard.vue';

export default {
  components: {
    FlaireCard,
  },
  props: {
    width: Number,
    height: Number,
  },
};
</script>
