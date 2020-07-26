<template>
  <v-card
    elevation="8"
    class="card-border1"
    :width="width"
    :height="height"
  >
    <slot></slot>
  </v-card>
</template>
<script>
export default {
  props: {
    width: String,
    height: String,
  }
};
</script>
<style lang="scss" scoped>
.card-border1 {
  border: 2px solid #FF666D; //Primary Pink
}
</style>
