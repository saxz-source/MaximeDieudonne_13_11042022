import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Footer from "./layers/Footer/Footer";

function App() {
    return (
        <>
            <Routes>
                <Route exact path="" element={<LandingPage />}></Route>
                <Route exact path="/log" element={<LoginPage />}></Route>
                <Route exact path="/profile" element={<ProfilePage />}></Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
