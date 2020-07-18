<template>
  <v-parallax src="@/assets/paralax.svg">
    <div class="d-flex">
      <v-row>
        <v-col>
          <v-card-text>
            Stories
          </v-card-text>
          <v-card-text>
            Connect with other peoples experiences, stay updated with the latest
            events, learn new tips and tricks to keep you safe no matter the situation.
          </v-card-text>
          <v-btn
            color="flaireBlack"
            class="flaireWhite--text"
          >View Stories</v-btn>
        </v-col>
        <v-col>
          <v-img src="@/assets/stories-image.png" width="300"/>
        </v-col>
      </v-row>
    </div>
  </v-parallax>
</template>
<script>
export default {

};
</script>
