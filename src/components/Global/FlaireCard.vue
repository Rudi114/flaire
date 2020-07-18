<template>
  <v-card
    elevation="8"
    id="card-border"
    rounded="xl"
    :width="width"
    :height="height"
    :class="customClass"
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
};
</script>
<style lang="scss" scoped>
#card-border {
  border: 2px solid #FF666D; //Primary Pink
}
</style>
