import {renderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: '10'},
            {id: 2, message: 'It\'s my first post', likesCount: '23'}
        ],
        newPostText: 'text here'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Yan'},
            {id: 2, name: 'Vasya'},
            {id: 3, name: 'Petya'},
            {id: 4, name: 'Nastya'},
            {id: 5, name: 'Sasha'},
            {id: 6, name: 'Kostya'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Yo'},
            {id: 3, message: 'Kek'}
        ]
    }
}

export const addPost = (userMessage) => {
    let newPost = {
        id: 5,
        message: userMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    renderEntireTree(state)
}

export const updatePostText = (newText) => {
    state.profilePage.newPostText = newText
    renderEntireTree(state)
}

export default state;