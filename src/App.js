import './App.css'
import React from "react"
import Navbar from "./components/Navbar/Navbar"
import ProfileContainer from "./components/Profile/ProfileContainer"
import {BrowserRouter, Route, withRouter} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/LoginPage/LoginPage";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/store";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-content">
                    <Route path={'/profile/:userId?'} render={() =>
                        <ProfileContainer/>}/>
                    <Route path={'/dialogs'} render={() =>
                        <DialogsContainer/>}/>
                    <Route path={'/users'} render={() =>
                        <UsersContainer/>}/>
                    <Route path={'/login'} render={() =>
                        <LoginPage/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)

const SamuraiJSApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SamuraiJSApp

