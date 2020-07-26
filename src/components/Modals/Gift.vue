<template>
  <v-dialog v-model="_active" @click:outside="_setActive(false)">
    <flaire-card>
      <v-card-text>
        hello
      </v-card-text>
    </flaire-card>
  </v-dialog>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import FlaireCard from '@/components/Global/FlaireCard.vue'
export default {
  components: {
    FlaireCard,
  },
  methods: {
    ...mapMutations({
      _setActive: "state/setGift",
    })
  },
  computed: {
    ...mapGetters({
      _active: "state/getGift",
    })
  }
}
</script>