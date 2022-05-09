import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Footer from "./layers/Footer/Footer";
import { getUser } from "./features/user.selector";
import { useSelector } from "react-redux";
import Header from "./layers/Header/Header";

function App() {
    const user = useSelector(getUser());



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
                </Routes>
            </BrowserRouter>

            <Footer />
        </>
    );
}

export default App;
