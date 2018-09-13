import Vue from 'vue'
import Vuex, {ActionTree, MutationTree} from 'vuex'
import {db, converter} from "@/main";
import {StoreState} from "@/typescriptBS/VuexState";

Vue.use(Vuex);

const state: StoreState = {
    appTitle: 'PvZ Community Website',
    error: undefined,
    loading: false,
    fameMembers: {
        moderators: [],
        contributors: []
    },
    rules: '',
    downloadLinks: [],
    otherLinks: [],
    helpQA: [],
    changelog: []
};

const mutations: MutationTree<StoreState> = {
    setError: (state, payload: Object) => state.error = payload,
    setLoading: (state, payload: boolean) => state.loading = payload,
    setFameMembers: (state, payload) => state.fameMembers = payload,
    setRules: (state, payload: string) => state.rules = payload,
    setDownloadLinks: (state, payload) => state.downloadLinks = payload,
    setOtherLinks: (state, payload) => state.otherLinks = payload,
    setHelpQA: (state, payload) => state.helpQA = payload,
    setChangelog: (state, payload) => state.changelog = payload
};

const dateFormat1 = {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'};
const dateFormat2 = {year: 'numeric', month: 'long', day: 'numeric'};

const actions: ActionTree<StoreState, StoreState> = {
    loadFameMembers({commit}): void {
        commit('setLoading', true);
        db.collection('Stuff').doc('w3lg8dyyelpulmgrVTVj').get()
            .then(doc => {
                commit('setFameMembers', doc.data());
                commit('setLoading', false)
            })
            .catch(err => {
                console.log('Oops:', err.message);
                commit('setError', err);
                commit('setLoading', false)
            })
    },
    loadRules({commit}): void {
        commit('setLoading', true);
        db.collection('HelpDoc').doc('lBBLh4hWkx1YMEjdwgWn').get()
            .then(doc => {
                let notdabyet: any = doc.data();
                notdabyet = notdabyet.ruleMarkdown.replace(/_b/g, '\n\n');
                let dab: string = converter.makeHtml(notdabyet);
                commit('setRules', dab);
                commit('setLoading', false)
            })
            .catch(err => {
                console.log('Eww:', err.message);
                commit('setError', err);
                commit('setLoading', false)
            })
    },
    getLinks({commit}): void {
        commit('setLoading', true);
        db.collection('Stuff').doc('ivGlFO6vsjD40iCIDf48').get()
            .then(doc => {
                let tmp: any = doc.data();
                let nyandesu: Object[] = tmp.links;
                let nyanDelta: Object[] = tmp.otherLinks;
                commit('setDownloadLinks', nyandesu);
                commit('setOtherLinks', nyanDelta);
                commit('setLoading', false)
            })
            .catch(err => {
                console.log('Error while fetching links:', err.message);
                commit('setError', err);
                commit('setLoading', false)
            })
    },
    getSupportData({commit}): void {
        commit('setLoading', true);
        db.collection('HelpDoc').doc('wC0JmmwJHN8VkIidy0Ec').get()
            .then(doc => {
                let yuck: any = doc.data();
                let notYuck: Object[] = yuck.questions.map((qaObj: any) => {
                    let tmp: string = converter.makeHtml(qaObj.aMarkdown.replace(/_b/g, '\n\n'));
                    let tmpObj = qaObj;
                    tmpObj.aMarkdown = tmp;
                    return tmpObj;
                });
                commit('setHelpQA', notYuck)
            })
            .catch(err => {
                console.log("Oopsy, got an error while getting Qs & As:", err.message);
                commit('setError', err)
            });
        db.collection('HelpDoc').doc('j2kqa2qAQhoRwIUX3i1C').get()
            .then(doc => {
                let gotIt: any = doc.data();
                let processed: Object[] = gotIt.changelog.reverse().map((changelogObj: any) => {
                    let tmp: string = converter.makeHtml(changelogObj.noteMarkdown.replace(/_b/g, '\n\n'));
                    let tmpObj = changelogObj;
                    tmpObj.noteMarkdown = tmp;
                    if (tmpObj.releaseDate) {
                        let date = tmpObj.releaseDate.toDate();
                        tmpObj.releaseDate = date.toLocaleDateString('en-US', date.getHours() != 0 ? dateFormat1 : dateFormat2)
                    }
                    return tmpObj
                });
                commit('setChangelog', processed);
                commit('setLoading', false)
            })
            .catch(err => {
                console.log("Oopsy, got an error while getting changelog:", err.message);
                commit('setError', err);
                commit('setLoading', false)
            })
    },
    openNewTab: ({commit}, payload: string) => payload ? window.open(payload, '_blank') : console.log('Empty url data = skipped, goshujin-sama')
};

export default new Vuex.Store({
    state,
    mutations,
    actions
})
