<template>
  <v-app>
    <navigation />
    <sign-up />
    <router-view />
  </v-app>
</template>

<script>

import Navigation from '@/components/Navigation.vue';
import SignUp from '@/components/SignUp.vue'
export default {
  name: 'App',

  components: {
    Navigation,
    SignUp
  },

  data: () => ({
    //
  }),
};
</script>
