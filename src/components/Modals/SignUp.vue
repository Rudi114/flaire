<template>
  <v-dialog
    v-model="_active"
    @click:outside="_setActive(false)"
    width = "500"
  >
    <flaire-card>
      <v-card class="mt-11" flat>
        <v-tabs
          centered="true"
          color="primaryRed"
        >
          <v-tab class="log-title-screen-font">
            Log In
          </v-tab>
          <v-tab-item>
            <v-card class="mx-6 mb-6 mt-14" flat>
              <v-text-field
                class="rounded-button log-screen-font mb-7 mx-9"
                label="Email"
                persistent-hint="true"
                hint="The one you signed up with"
                outlined
                :rules="[ rules.required, rules.emailMatch ]"
              ></v-text-field>
              <v-text-field
                class="rounded-button log-screen-font mb-6 mx-9"
                label="Password"
                persistent-hint="true"
                hint="The one created on sign up"
                outlined
                :rules="[ rules.required ]"
              ></v-text-field>
              <v-row>
                <v-spacer/>
                <v-btn
                  text
                  @click="resetPassword()"
                  class=""
                >Forgot Password?</v-btn>
                <v-spacer/>
              </v-row>
              <v-spacer />
              <v-card-actions class="justify-center">
                <v-btn
                  color="flaireBlack"
                  width="100"
                  height="45"
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
            <v-card class="mx-6 mb-6 mt-14" flat>
              <v-text-field
                class="rounded-button log-screen-font mb-7 mx-9"
                label="Full Name"
                persistent-hint="true"
                hint="How should we address you?"
                outlined
                :rules="[ rules.required ]"
                v-model="newUser.name"
              ></v-text-field>
              <v-text-field
                class="rounded-button log-screen-font mb-6 mx-9"
                label="Email"
                persistent-hint="true"
                hint="Type your current email"
                outlined
                :rules="[ rules.required, rules.emailMatch ]"
                v-model="newUser.email"
              ></v-text-field>
              <v-text-field
                class="rounded-button log-screen-font mb-6 mx-9"
                label="Phone"
                persistent-hint="true"
                hint="This is how we keep you safe"
                outlined
                :rules="[ rules.required ]"
                v-model="newUser.phone"
              ></v-text-field>
              <v-text-field
                class="rounded-button log-screen-font mb-6 mx-9"
                label="Password"
                persistent-hint="true"
                hint="Create a unique password"
                outlined
                :rules="[ rules.required, rules.length, rules.specialChar ]"
                v-model="newUser.password"
              ></v-text-field>
              <v-text-field
                class="rounded-button log-screen-font mb-6 mx-9"
                v-model="confirmPass"
                label="Confirm Password"
                persistent-hint="true"
                hint="confirm that password"
                outlined
                :rules="[ rules.required, rules.confirmMatch ]"
              ></v-text-field>
              <v-spacer />
              <v-card-actions class="justify-center">
                <v-btn
                  color="flaireBlack"
                  width="100"
                  height="45"
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
      rules: {
        required: (v) => !!(v) || 'Required',
        length: (v) => (v && v.length >= 8)
          || 'Passwords must be atleast 8 characters in length',
        specialChar: (v) => new RegExp(/[\s~`!@#$%\^&*+=\-\[\]\\‘;,/{}|\\“:<>\?()\._]/g).test(v) || 'Passwords require atleast one special character',
        confirmMatch: (v) => this.password === this.confirmPass
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
    }),
    ...mapActions({
      _signUp: 'state/signUp',
      _logIn: 'state/logIn'
    }),
    resetPassword() {
      this._setActive(false);
      this.$router.push('/reset');
    },
    signUp() {
      this._signUp()
        .then(() => {
          this._setActive(false);
          this.$router.push('/');
        });
    },
    logIn() {
      this._logIn()
        .then(() => {
          this._setActive(false);
          this.$router.push('/');
        })
    }
  },
  computed: {
    ...mapGetters({
      _active: 'state/getSignUp',
      _newUser: 'state/getNewUser',
      _loading: 'state/getLoading',
    }),
    newUser: {
      get() {
        return this._newUser;
      },
      set(val) {
        this._setNewUser(val);
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

</style>
