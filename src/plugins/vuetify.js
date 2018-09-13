import Vue from 'vue'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'


Vue.use(Vuetify, {
    theme: {
        primary: colors.green.accent4,
        second: colors.green.darken1
    },
    options: {
        themeVariations: ['primary', 'secondary']
    }
});