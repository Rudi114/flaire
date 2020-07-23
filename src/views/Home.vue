<template>
  <div>
    <v-card v-if="this.$vuetify.breakpoint.mdAndUp" color="primaryRed">
      <splash />
      <our-app />
      <testimonials />
      <stories />
      <resources />
      <pricing />
      <foooter />
    </v-card>
    <v-card v-if="this.$vuetify.breakpoint.smAndDown" color="primaryRed">
      <splash />
      <our-app />
      <testimonials />
      <stories />
      <resources />
      <pricing />
      <foooter />
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
import Splash from '@/components/Sections/Splash.vue';
import OurApp from '@/components/Sections/OurApp.vue';
import Testimonials from '@/components/Sections/Testimonials.vue';
import Stories from '@/components/Sections/Stories.vue';
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
  },
};
</script>
