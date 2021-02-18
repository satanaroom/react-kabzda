const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

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
        }
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._notifySubscriber(this._state)
        } else if (action.type === UPDATE_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._notifySubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._notifySubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 4, message: body})
            this._notifySubscriber(this._state)
        }
    }
}
export const addPostCreator = () => ({type: ADD_POST})
export const updatePostTextCreator = (text) =>
    ({type: UPDATE_POST_TEXT, newText: text })
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body })
export const sendMessageTextCreator = () =>
    ({type: SEND_MESSAGE})

export default store
window.store = store