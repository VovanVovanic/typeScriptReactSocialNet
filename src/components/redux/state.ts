import { ADD_DIALOG_MESSAGE, ADD_POST_MESSAGE, CHANGE_DIALOG_MESSAGE, CHANGE_POST_MESSAGE }from  './actionTypes'

export type PostMessageType = {
    message: string
    like: number
}
export type profileType = {
    postList: Array<PostMessageType>
    newPostMessage: string
}

export type userMessage = {
    label: string
}
export type dialogsType = {
    users: Array<userMessage>
    messages: Array<userMessage>
    newDialogMessage: string
}
export type sidebarItemType = {
    label: string
}
export type routesType = {
    label: string
    to: string
    exact: boolean
}
export type sidebarType = {
    friendList: Array<sidebarItemType>
    routeList: Array<routesType>
}

export type RootStateType = {
    profile: profileType
    dialogs: dialogsType
    sidebar: sidebarType
}

export type changeMessage = (post: string) => void

export type observerType = (state: RootStateType) => void

export type AddMessageType = () => void

export type StoreType = {
    _state: RootStateType
    renderTree: (state: RootStateType) => void
    subscribe: (observer: observerType) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}


export type ActionsType = ChangePostMessageType | ChangeDialogMessageType | AddPostMessageType | AddDialogMessageType

export type ChangePostMessageType = ReturnType<typeof changePostMessageAC>

export type ChangeDialogMessageType = ReturnType<typeof changeDialogMessageAC>

export type AddPostMessageType = ReturnType<typeof addPostMessageAC>
export type AddDialogMessageType = ReturnType<typeof addDialogMessageAC>


export const store: StoreType = {
    renderTree(state: RootStateType) {
        console.log('render')
    },
    _state: {
        profile: {
            postList: [
                { message: "My message", like: 1 },
                { message: "My second message", like: 6 }
            ],
            newPostMessage: ''
        },

        dialogs: {
            users: [
                { label: "Anna" },
                { label: "Natalya" },
                { label: "Vladimir" },
                { label: "Mike" },
                { label: "John" },
                { label: "Piter" },
                { label: "Alex" },
                { label: "Frank" }
            ],
            newDialogMessage: '',
            messages: [
                { label: "I am fine" },
                { label: "Hello" },
                { label: "What is you name?" },
                { label: "Look at this!" },
                { label: "Yo bro!" }
            ]
        },

        sidebar: {
            friendList: [
                { label: 'Andrew' },
                { label: 'Sasha' },
                { label: 'Sveta' }
            ],
            routeList: [
                { label: "Profile", to: "/", exact: true },
                { label: "Messages", to: "/dialogs", exact: false },
                { label: "News", to: "/news", exact: false },
                { label: "Music", to: "/music", exact: false },
                { label: "Settings", to: "/settings", exact: false },
            ]
        },

    },

    dispatch(action: any) {
        switch (action.type) {
            case CHANGE_POST_MESSAGE:
                this._state.profile.newPostMessage = action.post
                this.renderTree(this._state)
                break;
            case CHANGE_DIALOG_MESSAGE:
                this._state.dialogs.newDialogMessage = action.post
                this.renderTree(this._state)
                break;
            case ADD_POST_MESSAGE:
                const newPostMessage = { message: this._state.profile.newPostMessage, like: 4 }
                this._state.profile.postList.push(newPostMessage)
                this.renderTree(this._state)
                this._state.profile.newPostMessage = ''
                break;
            case ADD_DIALOG_MESSAGE:
                const newDialogMessage = { label: this._state.dialogs.newDialogMessage }
                this._state.dialogs.messages.push(newDialogMessage)
                this.renderTree(this._state)
                this._state.dialogs.newDialogMessage = ''
                break;
            default: return this._state
        }
    },

    subscribe(observer: observerType) {
        this.renderTree = observer
    },
    getState() {
        return this._state
    }
}

export const addDialogMessageAC = () => {
    return {
        type: "ADD_DIALOG_MESSAGE"
    }
}
export const addPostMessageAC = () => {
    return {
        type: "ADD_POST_MESSAGE"
    }
}
export const changeDialogMessageAC = (post: string) => {
    return {
        type: "CHANGE_DIALOG_MESSAGE",
        post: post
    } as const
}
export const changePostMessageAC = (post: string) => {
    return {
        type: "CHANGE_POST_MESSAGE",
        post: post
    } as const
}
