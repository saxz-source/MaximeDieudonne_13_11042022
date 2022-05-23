import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Footer from "./layers/Footer/Footer";
import { getUser } from "./features/user.selector";
import { useDispatch, useSelector } from "react-redux";
import Header from "./layers/Header/Header";
import { useEffect } from "react";
import { userActions } from "./features/user.slice";
import * as userAction from "./features/user.slice";
import Error404Page from "./pages/Error404Page/Error404Page";
import { selectErrors } from "./features/error.selector";
import StandardErrorPage from "./pages/StandardErrorPage/StandardErrorPage";

function App() {
    const user = useSelector(getUser());
    const errors = useSelector(selectErrors());
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.token) {
            dispatch(userActions.logUserWithStorage(localStorage.token));
            dispatch(userAction.fetchUserRequest());
        }
    }, [localStorage.token]);

    if (errors.isError) {
        return <StandardErrorPage errors = {errors} />;
    }

    return (
        <>
            <BrowserRouter>
                <Header user={user}></Header>
                <Routes>
                    <Route
                        exact
                        path=""
                        element={<LandingPage isLogged={user.isLogged} />}
                    ></Route>
                    <Route
                        exact
                        path="/login"
                        element={<LoginPage isLogged={user.isLogged} />}
                    ></Route>
                    <Route
                        exact
                        path="/profile"
                        element={<ProfilePage user={user} />}
                    ></Route>
                    <Route
                        exact
                        path="/*"
                        element={<Error404Page user={user} />}
                    ></Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
