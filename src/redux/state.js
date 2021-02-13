let store = {
    _notifySubscriber() {
        console.log('State changed')
    },
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
            ]
        }
    },
    getState() {
        return this._state
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._notifySubscriber(this._state)
    },
    updatePostText(newText) {
        this._state.profilePage.newPostText = newText
        this._notifySubscriber(this._state)
    },
    subscribe (observer) {
        this._notifySubscriber = observer //Паттерн "Наблюдатель"
    }
}
export default store
window.store = store