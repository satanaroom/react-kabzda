import './App.css'
import React from "react"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import {Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {

  return (
        <div className="app">
            <Header />
            <Navbar />
            <div className="app-content">
                <Route path={'/profile'} render={ () =>
                    <Profile />
                }/>
                <Route path={'/dialogs'} render={ () =>
                    <DialogsContainer />
                }/>
            </div>
        </div>
  );
}

export default App;
