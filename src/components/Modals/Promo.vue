<template>
  <v-dialog v-model="_active" @click:outside="_setActive(false)" width="400">
    <flaire-card>
      <v-card class="mx-6 mb-4 mt-8" flat color="flaireWhite">
        <v-card-actions class="justify-center d-flex flex-column mb-8">
          <v-card-title 
            class="recipiant-title-screen-font underline-color"
          > Promo Code </v-card-title>
        </v-card-actions>
        <v-text-field
          class="rounded-button recipiant-screen-font mx-9 mb-7"
          label="Code"
          color="primaryRed"
          outlined
        ></v-text-field>
        <v-spacer />
          <v-card-actions class="justify-center pt-0">
            <v-btn
              color="flaireBlack"
              :width="this.$vuetify.breakpoint.smAndDown ? 180 : 125"
              :height="this.$vuetify.breakpoint.smAndDown ? 50 : 45"
              class="flaireWhite--text recipiant-screen-font rounded-button mb-6"
              @click="addCode"
              :loading="_loading"
            >Add Code</v-btn>
          </v-card-actions>
        <v-spacer/>
      </v-card>
    </flaire-card>
  </v-dialog>
</template>
<script>
import FlaireCard from '@/components/Global/FlaireCard.vue';
import { mapGetters, mapMutations } from 'vuex';
export default {
  components: {
    FlaireCard
  },
  methods: {
    ...mapMutations({
      _setActive: "state/setPromo",
    }),
    addCode() {
      this._setActive(false);
    }
  },
  computed: {
    ...mapGetters({
      _active: "state/getPromo",
    })
  }
}
</script>