<template>
  <div>
    <div v-if="!this._auth">
      <v-card color="primaryRed" tile v-if="this.$vuetify.breakpoint.mdAndUp">
        <splash id="splash"/>
        <our-app/>
        <testimonials />
        <stories id="stories"/>
        <resources id="resources"/>
        <pricing id="pricing"/>
      </v-card>
      <v-card color="primaryRed" tile v-if="this.$vuetify.breakpoint.smAndDown">
        <splash id="splash"/>
        <our-app-mobile/>
        <testimonials />
        <stories-mobile id="stories"/>
        <resources-mobile id="resources"/>
        <pricing-mobile id="pricing"/>
      </v-card>
    </div>
    <div v-else>
      <profile/>
    </div>
  </div>
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
import ResourcesMobile from '@/components/Sections/ResourcesMobile.vue';
import Pricing from '@/components/Sections/Pricing.vue';
import PricingMobile from '@/components/Sections/PricingMobile.vue';
import Profile from '@/components/Profile.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    Splash,
    OurApp,
    Testimonials,
    Stories,
    Resources,
    Pricing,
    OurAppMobile,
    StoriesMobile,
    ResourcesMobile,
    PricingMobile,
    Profile
  },
  computed: {
    ...mapGetters({
      _auth: "authentication/getAuthenticated"
    })
  }
};
</script>
