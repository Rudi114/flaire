<template>
  <v-dialog v-model="_active" @click:outside="_setActive(false)" width="400">
    <flaire-card>
      <v-card flat color="flaireWhite">
        <v-card-actions class="justify-center d-flex flex-column">
          <v-card-title 
            class="recipiant-title-screen-font underline-color mt-6"
          >Delete Card</v-card-title>
          <div class="d-flex">
            <v-spacer cols="2"/>
            <v-col cols="8">
              <v-card-text  class="text-center pb-0">
                Are you sure? This action can not be undone.
              </v-card-text>
            </v-col>
            <v-spacer cols="2"/>
          </div>
        </v-card-actions>
          <v-card-actions class="justify-center">
            <v-btn
              color="flaireWhite"
              width="125"
              height="45"
              class="flaireBlack--text recipiant-screen-font rounded-button ma-6 btn-border"
              @click="_setActive(false)"
              :loading="_loading"
            >Cancel</v-btn>
            <v-btn
              color="flaireBlack"
              width="125"
              height="45"
              class="flaireWhite--text recipiant-screen-font rounded-button ma-6"
              @click="deleteCard()"
              :loading="_loading"
            >Delete</v-btn>
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
    FlaireCard,
  },
  methods: {
    ...mapMutations({
      _setActive: "state/setCard",
    }),
    deleteCard() {
      this._setActive(false);
    }
  },
  computed: {
    ...mapGetters({
      _active: "state/getCard",
    })
  }
}
</script>
<style lang="scss">
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
.btn-border {
  border: 2px solid #1F1F1F;
}
</style>