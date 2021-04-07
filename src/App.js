import './App.css'
import React from "react"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import ProfileContainer from "./components/Profile/ProfileContainer"
import {Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {

  return (
        <div className="app">
            <Header />
            <Navbar />
            <div className="app-content">
                <Route path={'/profile/:userId?'} render={ () =>
                    <ProfileContainer /> }/>
                <Route path={'/dialogs'} render={ () =>
                    <DialogsContainer /> }/>
                <Route path={'/users'} render={ () =>
                    <UsersContainer /> }/>
            </div>
        </div>
  );
}

export default App;
