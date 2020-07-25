<template>
  <v-card color="primaryRed" tile>
    <splash id="splash"/>
    <our-app v-if="this.$vuetify.breakpoint.mdAndUp"/>
    <our-app-mobile v-else />
    <testimonials />
    <stories v-if="this.$vuetify.breakpoint.mdAndUp" id="stories"/>
    <stories-mobile v-else id="stories"/>
    <resources id="resources"/>
    <pricing id="pricing"/>
    <foooter />
  </v-card>
</template>

<script>
// @ is an alias to /src
import Splash from '@/components/Sections/Splash.vue';
import OurApp from '@/components/Sections/OurApp.vue';
import OurAppMobile from '@/components/Sections/OurAppMobile.vue';
import Testimonials from '@/components/Sections/Testimonials.vue';
import Stories from '@/components/Sections/Stories.vue';
import StoriesMobile from '@/components/Sections/StoriesMobile.vue';
import Resources from '@/components/Sections/Resources.vue';
import Pricing from '@/components/Sections/Pricing.vue';
import Foooter from '@/components/Sections/Foooter.vue';

export default {
  name: 'Home',
  components: {
    Splash,
    OurApp,
    Testimonials,
    Stories,
    Resources,
    Pricing,
    Foooter,
    OurAppMobile,
    StoriesMobile,
  },
};
</script>
