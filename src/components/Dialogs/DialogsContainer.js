import React from "react"
import {sendMessageTextCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// state = store.getState()

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessageText: () => {
            dispatch(sendMessageTextCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer