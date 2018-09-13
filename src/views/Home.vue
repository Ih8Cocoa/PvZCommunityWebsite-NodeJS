<template>
  <v-container fluid>
    <LoadingCircle v-if="isLoading"/>
    <RuleDialog/>
    <v-layout row wrap>
      <v-flex xs12 md8 offset-md2 v-if="!isLoading">
        <img src="https://image.ibb.co/iyhv0T/Screenshot_2018_06_25_Pv_Z_The_Community_s_Website.png" alt="eww"
             class="picpic"/>
        <p class="text-xs-center font-weight-bold caption">Thumbnail of our (dying) community</p>
        <br/>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md8 offset-md2 v-if="!isLoading">
        <h2 class="headline">List of Moderators:</h2>
        <v-tabs v-model="activeTab">
          <v-tab v-for="(item, index) in tabItems" :key="index" :href="'#'+item">{{item}}</v-tab>
          <v-tabs-items v-model="activeTab">
            <v-layout>
              <v-tab-item id="admin & moderators">
                <HoFList :personList="modTeam"/>
              </v-tab-item>
              <v-tab-item id="other contributors">
                <HoFList :personList="otherContribs"/>
              </v-tab-item>
            </v-layout>
          </v-tabs-items>
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    import LoadingCircle from '../components/LoadingCircle'
    import {mapState} from 'vuex'
    import HoFList from "../components/HoFList";
    import RuleDialog from "../components/RuleDialog";

    export default {
        name: "Home",
        data: () => ({
            tabItems: ['admin & moderators', 'other contributors'],
            activeTab: 'admin & moderators'
        }),
        created() {
            this.$store.dispatch('loadFameMembers')
        },
        components: {RuleDialog, HoFList, LoadingCircle},
        computed: mapState({
            isLoading: state => state.loading,
            modTeam: state => state.fameMembers.moderators,
            otherContribs: state => state.fameMembers.contributors
        })
    }
</script>

<style scoped>
  .picpic {
    width: 100%;
    height: auto;
  }
</style>