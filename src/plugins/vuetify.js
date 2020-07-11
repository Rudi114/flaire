import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
  theme: {
    themes: {
      light: {
        secondaryRed: '#993339',
        primaryPink: '#FF666D',
        primaryRed: '#EB5058',
        secondaryPink: '#FF9999',
        flaireSalmon: '#F8B1A5',
        secondaryBlue: '#0B3954',
        primaryBlue: '#2570BB',
        flaireWhite: '#FFF5FF',
        flaireBlack: '#1F1F1F',
      },
    },
  },
});
