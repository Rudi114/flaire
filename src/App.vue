<template>
  <v-app>
    <navigation v-if="this.$vuetify.breakpoint.mdAndUp"/>
    <sign-up />
    <card />
    <promo />
    <gift />
    <router-view />
    <foooter  v-if="this.$vuetify.breakpoint.mdAndUp"/>
    <foooter-mobile v-if="this.$vuetify.breakpoint.smAndDown"/>
  </v-app>
</template>

<script>

import Navigation from '@/components/Navigation.vue';
import SignUp from '@/components/Modals/SignUp.vue'
import Gift from '@/components/Modals/Gift.vue'
import Card from '@/components/Modals/Card.vue'
import Promo from '@/components/Modals/Promo.vue'
import Foooter from '@/components/Sections/Foooter.vue';
import FoooterMobile from '@/components/Sections/FoooterMobile.vue';
export default {
  name: 'App',
  components: {
    Navigation,
    SignUp,
    Gift,
    Card,
    Promo,
    Foooter,
    FoooterMobile
  },
};
</script>
<style lang="scss">
html {
  overflow-y: auto !important;
}
* {
  overflow: hidden;
}
::-webkit-scrollbar {
  width: 0px;
}
a {
  color: inherit;
  text-decoration: none;
}
.btn {
    text-transform: none;
}
</style>
