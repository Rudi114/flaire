<template>
  <v-app>
    <navigation />
    <router-view />
  </v-app>
</template>

<script>

import Navigation from '@/components/Navigation.vue';

export default {
  name: 'App',

  components: {
    Navigation,
  },

  data: () => ({
    //
  }),
};
</script>
