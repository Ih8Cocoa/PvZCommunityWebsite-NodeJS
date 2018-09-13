<template>
    <v-container>
        <LoadingCircle v-if="isLoading" />
        <v-layout row wrap v-else>
            <v-flex xs12>
                <p class="display-1">Welcome to the Support page</p>
                <p class="body-2">What do you need help with, my child?</p>
                <v-divider/>
                <br/>
                <p class="headline">Questions & Answers</p>
                <p class="body-1">Here are some questions you probably have. I think...</p>
                <v-expansion-panel>
                    <v-expansion-panel-content v-for="(item, index) in helpQA" :key="index">
                        <div slot="header" class="font-weight-bold">{{item.q}}</div>
                        <v-card>
                            <v-card-text>
                                <div v-html="item.aMarkdown"/>
                            </v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <br/>
                <v-divider/>
                <br/>
                <p class="headline">Website changelog</p>
                <p class="body-1">A record of what was changed on this website</p>
                <v-expansion-panel>
                    <v-expansion-panel-content v-for="(log, i) in changelog" :key="i">
                        <div slot="header">
                            <span class="font-weight-bold">Version {{log.version}}</span>
                            <span class="font-italic" v-if="log.releaseDate"> - Updated {{log.releaseDate}}</span>
                        </div>
                        <v-card>
                            <v-card-text>
                                <div v-html="log.noteMarkdown"/>
                            </v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-flex>
            <v-flex xs12>
                <br/>
                <p class="headline">Look goshujin-sama, i've fetch you the help content desu desu</p>
                <p class="body-2">Are you proud of me goshujin-sama?</p>
                <br/>
                <img src="https://i.imgur.com/xY0W4sJ.gif" alt="disgusting weebshit fap material"
                     title="YEEEEEES PLS PET ME MOAAAR PLS NYAAAAAAAAAAAAAAAAA" class="resizepls"/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {mapState} from 'vuex'
    import LoadingCircle from "../components/LoadingCircle";

    export default {
        name: "Support",
        components: {LoadingCircle},
        created() {
            this.$store.dispatch('getSupportData')
        },
        computed: mapState({
            helpQA: state => state.helpQA,
            changelog: state => state.changelog,
            isLoading: state => state.loading
        })
    }
</script>

<style scoped>
    .resizepls {
        max-width: 500px;
        height: auto;
    }
</style>