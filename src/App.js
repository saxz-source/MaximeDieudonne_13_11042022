import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Footer from "./layers/Footer/Footer";
import { isUserLogged } from "./features/user.selector";
import { useSelector } from "react-redux";
import Header from "./layers/Header/Header";
import { useEffect, useState } from "react";

function App() {
    const isLogged = useSelector(isUserLogged());



    return (
        <>
     
            <BrowserRouter>
            <Header isLogged={isLogged}></Header>
                <Routes>
                    <Route
                        exact
                        path=""
                        element={<LandingPage isLogged={isLogged} />}
                    ></Route>
                    <Route
                        exact
                        path="/login"
                        element={<LoginPage isLogged={isLogged} />}
                    ></Route>
                    <Route
                        exact
                        path="/profile"
                        element={<ProfilePage isLogged={isLogged} />}
                    ></Route>
                </Routes>
            </BrowserRouter>

            <Footer />
        </>
    );
}

export default App;
