interface fameMember {
    contacts?: Array<Object>
    description: string,
    name: string,
    profileUrl: string,
    thumbnailUrl: string
}

export interface StoreState {
    appTitle: string,
    error?: Object,
    loading: boolean,
    fameMembers: {
        moderators: Array<fameMember>,
        contributors: Array<fameMember>
    },
    rules: string,
    downloadLinks: Array<{
        description: string,
        title: string
        downloads: Array<{
            displayText: string,
            link: string
        }>
    }>,
    otherLinks: Array<{
        description: string,
        title: string
        link: string
    }>,
    helpQA: Array<{
        aMarkdown: string,
        q: string
    }>,
    changelog: Array<{
        noteMarkdown: string,
        version: string,
        releaseDate?: any
    }>
}