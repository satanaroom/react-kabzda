import './App.css'
import React from "react"
import Navbar from "./components/Navbar/Navbar"
import {BrowserRouter, Redirect, Route, withRouter, Switch} from "react-router-dom"
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/LoginPage/LoginPage";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')); // Не собирай эту компоненту в один сборщик, а оставь ее на потом, когда будет необходимо React.Lazy
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer')); // Не собирай эту компоненту в один сборщик, а оставь ее на потом, когда будет необходимо React.Lazy

class App extends React.Component {
    componentDidMount() { // Срабатывает 1 раз, когда компонента вмонтируется
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) { // если приложение не проинициализировалось, покажется крутилка
            return <Preloader/>
        }

        return (
            <div className="app">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-content">
                    <Switch>
                        <Route
                            exact
                            path={'/'}
                            render={() => <Redirect to={'/profile'}/>}
                        />

                        <Route
                            path={'/profile/:userId?'}
                            render={withSuspense(ProfileContainer)}
                        />

                        <Route
                            path={'/dialogs'}
                            render={withSuspense(DialogsContainer)}
                        />

                        <Route
                            path={'/users'}
                            render={() => <UsersContainer/>}
                        />

                        <Route
                            path={'/login'}
                            render={() => <LoginPage/>}
                        />

                        <Route
                            path={'*'}
                            render={() => <div>404 not found</div>}
                        />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

// hoc - функция, которая принимает 1 компоненту и возвращает контейнерную компоненту над входящей, чтобы дать ей
// определенные возможности и данные

const AppContainer = compose( // один за другим применят хоки для итоговой компоненты
    withRouter, // позволяет работать роутингу
    connect(mapStateToProps, {initializeApp}) // connect - дает данные из store
)(App)

const SamuraiJSApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                {/*провайдер кладет store в контекст, чтобы любой компоненте store стал доступен.*/}
                {/*любая компонента может стать consumer-ом (потребителем) этого контекста.*/}
                {/*в глобальный контекст можно поместить store, локализацию, выбранную тему.*/}
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SamuraiJSApp

