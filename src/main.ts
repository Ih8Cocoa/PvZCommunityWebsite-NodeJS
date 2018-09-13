import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'

require('firebase/firestore');
const showdown = require('showdown');
export const converter = new showdown.Converter();

Vue.config.productionTip = false;

const config: object = {
    apiKey: "AIzaSyAufC1gQl1LCZKqlkeH1jM0KahsvHcvQu4",
    databaseURL: "https://ih8cocoa-s-project.firebaseio.com",
    projectId: "ih8cocoa-s-project"
};
const settings: object = {timestampsInSnapshots: true};
firebase.initializeApp(config);
const initdb = firebase.firestore();
initdb.settings(settings);
export const db = initdb;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
