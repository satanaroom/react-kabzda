import './App.css'
import React from "react"
import Navbar from "./components/Navbar/Navbar"
import ProfileContainer from "./components/Profile/ProfileContainer"
import {Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/LoginPage/LoginPage";

const App = (props) => {

  return (
        <div className="app">
            <HeaderContainer />
            <Navbar />
            <div className="app-content">
                <Route path={'/profile/:userId?'} render={ () =>
                    <ProfileContainer /> }/>
                <Route path={'/dialogs'} render={ () =>
                    <DialogsContainer /> }/>
                <Route path={'/users'} render={ () =>
                    <UsersContainer /> }/>
                <Route path={'/login'} render={ () =>
                    <LoginPage /> }/>
            </div>
        </div>
  );
}

export default App;
