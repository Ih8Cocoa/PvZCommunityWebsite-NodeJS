<template>
    <v-layout justify-row center>
        <v-dialog v-model="dialog" persistent scrollable>
            <v-card>
                <v-card-title class="headline">Community rules</v-card-title>
                <LoadingCircle v-if="isLoading" />
                <v-card-text v-else>
                    <div v-html="ruleHTML" />
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="green darken-1" flat @click.native="dialog = false">i accept</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    import {mapState} from 'vuex'
    import LoadingCircle from "./LoadingCircle";
    export default {
        name: "RuleDialog",
        components: {LoadingCircle},
        data: () => ({
            dialog: false
        }),
        created() {
            this.$store.dispatch('loadRules');
        },
        computed: mapState({
            ruleHTML: state => state.rules,
            isLoading: state => state.loading
        })
    }
</script>

<style scoped>

</style>