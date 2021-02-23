import React from "react"
import {sendMessageTextCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageTextCreator())
    }

    const onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs
            dialogsPage={state}
            updateNewMessageBody={onNewMessageChange}
            sendMessageText={onSendMessageClick}
        />
    )
}

export default DialogsContainer