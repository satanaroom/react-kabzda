import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from "react-router-dom"
import state, {addPost, subscribe, updatePostText} from './redux/state'

const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updatePostText={updatePostText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}
rerenderEntireTree(state)

subscribe(rerenderEntireTree)

