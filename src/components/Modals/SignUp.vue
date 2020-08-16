<template>
  <v-dialog
    v-model="_active"
    @click:outside="_setActive(false)"
    width="500"
  >
    <flaire-card
      height="auto"
      class="sign-up"
    >
      <v-card
        class="mt-11"
        flat
        color="flaireWhite"
      >
        <v-tabs
          centered
          color="primaryRed"
          background-color="flaireWhite"
        >
          <v-tab class="log-title-screen-font">
            Log In
          </v-tab>
          <v-tab-item>
            <v-card class="px-6 pb-6 pt-14" flat color="flaireWhite">
              <v-text-field
                class="rounded-button log-screen-font mb-7 mx-9"
                label="Email"
                persistent-hint
                color="primaryRed"
                hint="The one you signed up with"
                outlined
                v-model="logInCreds.username"
                :rules="[ rules.required, rules.emailMatch ]"
              ></v-text-field>
              <v-text-field
                class="rounded-button log-screen-font mb-6 mx-9"
                label="Password"
                color="primaryRed"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
                persistent-hint
                hint="The one created on sign up"
                outlined
                v-model="logInCreds.password"
                :rules="[ rules.required ]"
              ></v-text-field>
              <v-row>
                <v-spacer/>
                <v-btn
                  @click="resetPassword()"
                  text
                >Forgot Password?</v-btn>
                <v-spacer/>
              </v-row>
              <v-spacer />
              <v-card-actions class="justify-center">
                <v-btn
                  color="flaireBlack"
                  :width="this.$vuetify.breakpoint.smAndDown ? 180 : 125"
                  :height="this.$vuetify.breakpoint.smAndDown ? 50 : 45"
                  :loading="_loading"
                  @click="logIn()"
                  class="flaireWhite--text log-screen-font rounded-button ma-6"
                >Log In</v-btn>
              </v-card-actions>
              <v-spacer/>
            </v-card>
          </v-tab-item>
          <v-tab class="log-title-screen-font">
            Sign Up
          </v-tab>
          <v-tab-item>
            <v-card class="px-6 pb-6 pt-14" flat color="flaireWhite">
              <v-text-field
                class="rounded-button log-screen-font mb-7 mx-9"
                label="Full Name"
                persistent-hint
                hint="How should we address you?"
                color="primaryRed"
                outlined
                :rules="[ rules.required ]"
                v-model="newUser.name"
              ></v-text-field>
              <v-text-field
                class="rounded-button log-screen-font mb-6 mx-9"
                label="Email"
                persistent-hint
                hint="Type your current email"
                color="primaryRed"
                outlined
                :rules="[ rules.required, rules.emailMatch ]"
                v-model="newUser.email"
              ></v-text-field>
              <v-text-field
                class="rounded-button log-screen-font mb-6 mx-9"
                label="Phone"
                persistent-hint
                hint="This is how we keep you safe"
                color="primaryRed"
                outlined
                :rules="[ rules.required ]"
                v-model="newUser.phone"
              ></v-text-field>
              <v-text-field
                class="rounded-button log-screen-font mb-6 mx-9"
                label="Password"
                persistent-hint
                hint="Create a unique password"
                color="primaryRed"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show2 ? 'text' : 'password'"
                @click:append="show2 = !show2"
                outlined
                :rules="[ rules.required, rules.length, rules.specialChar ]"
                v-model="newUser.password"
              ></v-text-field>
              <v-text-field
                class="rounded-button log-screen-font mb-6 mx-9"
                v-model="newUser.confirmPass"
                label="Confirm Password"
                :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show3 ? 'text' : 'password'"
                @click:append="show3 = !show3"
                persistent-hint
                hint="confirm that password"
                color="primaryRed"
                outlined
                :rules="[ rules.required, rules.confirmMatch ]"
              ></v-text-field>
                <v-row>
                  <v-col cols="2" class="pa-0">
                    <v-checkbox class="ml-11" v-model="terms"/>
                  </v-col>
                  <v-col cols="10" class="pa-0 d-flex align-center">
                    <v-card-text class="pa-0">
                      I agree to the 
                      <span>
                        <a href="">
                          terms of service
                        </a>
                      </span>
                      and
                      <span>
                        <a href="">
                          privacy policy
                        </a>
                      </span>
                    </v-card-text>
                  </v-col>
                </v-row>
              <v-spacer />
              <v-card-actions class="justify-center">
                <v-btn
                  color="flaireBlack"
                  :width="this.$vuetify.breakpoint.smAndDown ? 180 : 125"
                  :height="this.$vuetify.breakpoint.smAndDown ? 50 : 45"
                  class="flaireWhite--text log-screen-font rounded-button ma-6"
                  @click="signUp"
                  :loading="_loading"
                >Sign Up</v-btn>
              </v-card-actions>
              <v-spacer/>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </flaire-card>
  </v-dialog>
</template>
<script>

import FlaireCard from '@/components/Global/FlaireCard.vue';
import { mapMutations, mapGetters, mapActions } from 'vuex';

export default {
  components: {
    FlaireCard,
  },
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      terms: false,
      rules: {
        required: (v) => !!(v) || 'Required',
        length: (v) => (v && v.length >= 8)
          || 'Passwords must be atleast 8 characters in length',
        specialChar: (v) => new RegExp(/[\s~`!@#$%\^&*+=\-\[\]\\‘;,/{}|\\“:<>\?()\._]/g).test(v) || 'Passwords require atleast one special character',
        confirmMatch: (v) => this.newUser.password === this.newUser.confirmPass
          || 'The passwords you entered don’t match',
        emailMatch: (v) => new RegExp(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ).test(v) || 'Invalid e-mail.',
        phoneMatch: (v) => new RegExp(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/).test(v) || 'Invalid Phone',
      },
    };
  },
  methods: {
    ...mapMutations({
      _setActive: 'state/setSignUp',
      _setNewUser: 'state/setNewUser',
      _setUserCreds: 'state/setUserCreds',
    }),
    ...mapActions({
      _signUp: 'state/signUp',
      _logIn: 'state/logIn',
    }),
    resetPassword() {
      this._setActive(false);
      this.$router.push('/reset');
    },
    signUp() {
      this._signUp()
        .then(() => {
          this._signUp;
          // this._setActive(false);
          // this.$router.push('/');
        });
    },
    logIn() {
      this._logIn()
        .then(() => {
          this._setActive(false);
          this.$router.push('/');
        });
    },
  },
  computed: {
    ...mapGetters({
      _active: 'state/getSignUp',
      _newUser: 'state/getNewUser',
      _loading: 'state/getLoading',
      _userCreds: 'state/getUserCreds',
    }),
    newUser: {
      get() {
        return this._newUser;
      },
      set(val) {
        this._setNewUser(val);
      },
    },
    logInCreds: {
      get() {
        return this._userCreds;
      },
      set(val) {
        this._setUserCreds;
      },
    },
  },
};
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
.log-title-screen-font {
  font-family: HeroNew-Medium;
  font-size: 17px;
}
.log-screen-font {
  font-family: HeroNew-Regular;
}
.rounded-card {
  border-radius: 30px;
}
.rounded-button {
  border-radius: 10px;
}
.sign-up {
  overflow-y: auto !important;
}

</style>
