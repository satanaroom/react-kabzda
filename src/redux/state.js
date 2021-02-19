import profileReducer from "./profile-reducer";
import {act} from "@testing-library/react";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
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
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _notifySubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe (observer) {
        this._notifySubscriber = observer //Паттерн "Наблюдатель"
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._notifySubscriber(this._state)
    }
}

export default store
window.store = store