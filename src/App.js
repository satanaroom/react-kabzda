import './App.css'
import React from "react"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import Dialogs from "./components/Dialogs/Dialogs"
import {Route} from "react-router-dom"

const App = (props) => {

  return (
        <div className="app">
            <Header />
            <Navbar />
            <div className="app-content">
                <Route path={'/profile'} render={ () =>
                    <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                    />
                }/>
                <Route path={'/dialogs'} render={ () =>
                    <Dialogs state={props.state.dialogsPage}/>
                }/>
            </div>
        </div>
  );
}

export default App;
