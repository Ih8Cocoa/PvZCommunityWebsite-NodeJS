<template>
  <v-app>
    <Navi/>
    <v-content>
      <router-view :key="$route.fullPath"></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
    import Navi from "./components/Navi.vue";
    import {Component, Vue} from 'vue-property-decorator'

    @Component({
        components: {Navi}
    })

    export default class App extends Vue {
    }
</script>

<style scoped>
</style>