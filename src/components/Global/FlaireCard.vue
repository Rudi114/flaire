<template>
  <v-card
    elevation="8"
    class="card-border1"
    rounded="xl"
    :width="Number(width)"
    :height="Number(height)"
  >
    <slot/>
  </v-card>
</template>
<script>
export default {
  props: ['width', 'height'],
};
</script>
<style lang="scss" scoped>
.card-border1 {
  border: 2px solid #FF666D; //Primary Pink
  background-color: #FFF5FF;
}
</style>
