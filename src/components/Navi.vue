<template>
    <v-container>
        <v-navigation-drawer v-model="sidebar" app disable-resize-watcher clipped>
            <v-list>
                <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.path">
                    <v-list-tile-action>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        {{item.title}}
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="primary">
            <span class="hidden-lg-and-up">
                <v-toolbar-side-icon @click="sidebar = !sidebar"></v-toolbar-side-icon>
            </span>
            <v-toolbar-title>
                <router-link to="/" tag="span" style="cursor: pointer">
                    {{appTitle}}
                </router-link>
            </v-toolbar-title>
            <v-spacer />
            <v-toolbar-items class="hidden-md-and-down">
                <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path">
                    <v-icon left>{{item.icon}}</v-icon>
                    {{item.title}}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </v-container>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "Navi",
        data: () => ({
            sidebar: false
        }),
        computed: {
            ...mapState(['appTitle']),
            menuItems: () => ([{
                title: 'Home',
                path: '/',
                icon: 'home'
            }, {
                title: 'Useful Links',
                path: '/links',
                icon: 'mdi-link-variant'
            }, {
                title: 'PvZH Decks',
                path: '/pvzhdecks',
                icon: 'mdi-cards'
            }, {
                title: 'Support',
                path: '/support',
                icon: 'help'
            }, {
                title: 'Donate',
                path: '/donate',
                icon: 'attach_money'
            }])
        }
    }
</script>

<style scoped>

</style>