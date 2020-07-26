<template>
  <v-app>
    <navigation v-if="this.$vuetify.breakpoint.mdAndUp"/>
    <sign-up />
    <gift />
    <router-view />
  </v-app>
</template>

<script>

import Navigation from '@/components/Navigation.vue';
import SignUp from '@/components/Modals/SignUp.vue'
import Gift from '@/components/Modals/Gift.vue'
export default {
  name: 'App',

  components: {
    Navigation,
    SignUp,
    Gift
  },

  data: () => ({
    //
  }),
};
</script>
