import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from "react-router-dom"
import store from './redux/store'
import {Provider} from "react-redux";


const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    )
}
rerenderEntireTree()

//Реализация на 42 уроке (у меня работает если передать аттрибут state={store.getState()})
store.subscribe(() => {
    rerenderEntireTree()
})

