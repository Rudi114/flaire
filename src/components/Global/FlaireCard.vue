<template>
  <v-card
    elevation="8"
    :id="hover ? '' : 'card-border'"
    rounded="xl"
    :width="width"
    :height="height"
    :class="customClass"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <slot></slot>
  </v-card>
</template>
<script>
export default {
  props: {
    width: String,
    height: String,
    customClass: String,
  },
  data() {
    return {
      hover: false,
    }
  }
};
</script>
<style lang="scss" scoped>
#card-border {
  border: 2px solid #FF666D; //Primary Pink
}
</style>
