import LandingPageZone from "../../components/LandingPage/LandingPageZone/LandingPageZone";
import Header from "../../layers/Header/Header";
import "./landingPage.css";

const LandingPage = ({isLogged}) => {
    return (
        <>
            <Header isLogged={isLogged} />
            <LandingPageZone isLogged={isLogged}/>
        </>
    );
};

export default LandingPage;
