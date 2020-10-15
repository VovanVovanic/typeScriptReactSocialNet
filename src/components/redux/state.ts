
type PostMessageType = {
    message: string
    like: number
}
type profileType ={
    postList: Array<PostMessageType>
}

export type userMessage = {
    label: string
}
export type dialogsType = {
    users: Array<userMessage>
    messages: Array<userMessage>
}
export type sidebarItemType ={
label: string
}
export type routesType = {
    label: string
    to: string
    exact: boolean
}
type sidebarType = {
    friendList: Array<sidebarItemType>
    routeList: Array<routesType>
}

 type RootStateType = {
    profile: profileType
    dialogs: dialogsType
    sidebar: sidebarType
}

export let state: RootStateType = {
    profile: {
        postList: [
            {message: "My message", like: 1},
            { message: "My second message", like: 6 }
        ],
    },

    dialogs: {
        users: [
            {label: "Anna"},
            {label: "Natalya"},
            {label: "Vladimir"},
            {label: "Mike"},
            {label: "John"},
            {label: "Piter"},
            {label: "Alex"},
            {label: "Frank"}
        ],

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
            {label: 'Sveta'}
        ],
        routeList: [
    { label: "Profile", to: "/", exact: true},
    { label: "Messages", to: "/dialogs", exact: false },
    { label: "News", to: "/news", exact: false },
    { label: "Music", to: "/music", exact: false },
    { label: "Settings", to: "/settings", exact: false },
  ]
    },
    
}
