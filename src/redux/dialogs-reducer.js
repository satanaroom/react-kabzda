const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 4, message: body})
            return state
        default:
            return state
    }
}

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body })
export const sendMessageTextCreator = () =>
    ({type: SEND_MESSAGE})

export default dialogsReducer