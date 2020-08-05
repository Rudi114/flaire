<template>
  <v-dialog 
    v-model="_active" 
    @click:outside="_setActive(false)"
    width="500"
  >
    <flaire-card>
      <v-card class="mx-6 mb-4 mt-8" flat color="flaireWhite">
        <v-card-actions class="justify-center d-flex flex-column mb-8">
          <v-card-title 
            class="recipiant-title-screen-font underline-color"
          > Recipient </v-card-title>
        </v-card-actions>
        <v-text-field
          class="rounded-button recipiant-screen-font mx-9 mb-7"
          label="Full name"
          persistent-hint
          hint="Name of person you are gifting"
          outlined
          :rules="[ rules.required]"
        ></v-text-field>
        <v-text-field
          class="rounded-button recipiant-screen-font mx-9 "
          label="Email"
          persistent-hint
          hint="email of person you are gifting"
          outlined
          :rules="[ rules.required, rules.emailMatch ]"
        ></v-text-field>
        <v-spacer />
          <v-card-actions class="justify-center">
            <v-btn
              color="flaireBlack"
              :width="this.$vuetify.breakpoint.smAndDown ? 180 : 125"
              :height="this.$vuetify.breakpoint.smAndDown ? 50 : 45"
              class="flaireWhite--text recipiant-screen-font rounded-button ma-6"
              @click="sendGift"
              :loading="_loading"
            >Send Gift</v-btn>
          </v-card-actions>
        <v-spacer/>
      </v-card>
    </flaire-card>
  </v-dialog>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import FlaireCard from '@/components/Global/FlaireCard.vue'
export default {
  components: {
    FlaireCard,
  },
  data() {
    return {
      rules: {
        required: (v) => !!(v) || 'Required',
        emailMatch: (v) => new RegExp(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ).test(v) || 'Invalid e-mail.'
      },
    };
},
  methods: {
    ...mapMutations({
      _setActive: "state/setGift",
    }),
    ...mapActions({
      _sendGift: "state/sendGift"
    }),
    sendGift() {
      this._sendGift
        .then(() => {
          this._setActive(false);
        })
    }
  },
  computed: {
    ...mapGetters({
      _active: "state/getGift",
      _loading: "state/getLoading"
    })
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'HeroNew-Regular';
  src: url('../../assets/fonts/HeroNew/HeroNewRegular.otf');
}
@font-face {
  font-family: 'HeroNew-Medium';
  src: url('../../assets/fonts/HeroNew/HeroNewMedium.otf');
}
.recipiant-title-screen-font {
  font-family: HeroNew-Medium;
  font-size: 30px;
}
.recipiant-screen-font {
  font-family: HeroNew-Regular;
}
.rounded-button {
  border-radius: 10px;
}
.underline-color{
  text-decoration: none;
  position: relative;
}
.underline-color:after {
    position: absolute;
    height: 2.5px;
    margin: auto;
    content: '';
    left: 0;
    right: 0;
    width: 90%;
    background-color: #EB5058;
    left: 0;
    bottom: 4px; /* adjust this to move up and down. you may have to adjust the line height of the paragraph if you move it down a lot. */
}
</style>
