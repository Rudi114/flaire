<template>
  <v-card color="primaryRed">
    <splash />
    <our-app />
    <testimonials />
    <stories />
    <resources />
    <pricing />
    <foooter />
  </v-card>
</template>

<script>
// @ is an alias to /src
import Splash from '@/components/Splash.vue';
import OurApp from '@/components/OurApp.vue';
import Testimonials from '@/components/Testimonials.vue';
import Stories from '@/components/Stories.vue';
import Resources from '@/components/Resources.vue';
import Pricing from '@/components/Pricing.vue';
import Foooter from '@/components/Foooter.vue';

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
  },
};
</script>
