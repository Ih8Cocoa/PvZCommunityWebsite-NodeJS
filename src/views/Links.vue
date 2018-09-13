<template>
    <v-container>
        <LoadingCircle v-if="isLoading"/>
        <div v-else>
            <p class="display-1">Download links</p>
            <p class="body-2 font-weight-regular">All of these links are for Android devices & emulators, unless stated otherwise</p>
            <v-layout row wrap justify-space-around align-center mb-5>
                <v-flex xs12 sm7 md5 lg4 xl3 offset-lg2 offset-xl0 v-for="(item, index) in dlLinks" :key="index" mt-3>
                    <v-card raised height="200px">
                        <v-card-title primary-title>
                            <p class="headline">{{item.title}}</p>
                            <p class="grey--text">{{item.description}}</p>
                        </v-card-title>
                        <v-divider />
                        <v-card-actions>
                            <v-btn flat v-for="(download, i) in item.downloads" :key="i"
                                   @click.native="openNewTab(download.link)" :disabled="download.link===''">
                                <span :class="download.link!=='' ? 'green--text' : 'grey--text' " class="caption font-weight-bold">{{download.displayText}}</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
            <p class="display-1">Other links</p>
            <v-layout row wrap justify-space-around align-center>
                <v-flex xs12 sm7 md5 lg3 offset-lg2 offset-xl0 v-for="(item, index) in otherLinks" :key="index" mt-3>
                    <v-card raised>
                        <v-card-title primary-title>
                            <p class="headline">{{item.title}}</p>
                            <p class="grey--text">{{item.description}}</p>
                        </v-card-title>
                        <v-spacer />
                        <v-divider />
                        <v-card-actions>
                            <v-spacer />
                            <v-btn flat @click.native="openNewTab(item.link)" :disabled="item.link===''">
                                <span :class="item.link!=='' ? 'red--text' : 'grey--text' ">Go</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </div>
    </v-container>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import LoadingCircle from "../components/LoadingCircle";

    export default {
        name: "Links",
        components: {LoadingCircle},
        created() {
            this.$store.dispatch('getLinks')
        },
        methods: mapActions(['openNewTab']),
        computed: mapState({
            dlLinks: state => state.downloadLinks,
            otherLinks: state => state.otherLinks,
            isLoading: state => state.loading
        })
    }
</script>

<style scoped>

</style>