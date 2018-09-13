<template>
    <v-list two-line>
        <v-list-tile v-for="(person, i) in personList" :key="i" avatar>
            <v-list-tile-avatar>
                <img :src="person.thumbnailUrl"/>
            </v-list-tile-avatar>
            <v-list-tile-content>
                <v-list-tile-title v-html="person.name"/>
                <v-list-tile-sub-title v-html="person.description"/>
            </v-list-tile-content>
            <v-list-tile-action>
                <v-btn icon ripple @click="openNewTab(person.profileUrl)">
                    <v-icon color="red darken-1">mdi-google-plus-box</v-icon>
                </v-btn>
                <v-btn icon ripple v-if="person.contacts !== undefined && person.contacts.facebook !== undefined"
                       @click="openNewTab(`https://m.me/${person.contacts.facebook}`)">
                    <v-icon color="blue lighten-1">mdi-facebook-messenger</v-icon>
                </v-btn>
            </v-list-tile-action>
        </v-list-tile>
    </v-list>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "HoFList",
        props: ['personList'],
        methods: mapActions(['openNewTab'])
    }
</script>

<style scoped>

</style>