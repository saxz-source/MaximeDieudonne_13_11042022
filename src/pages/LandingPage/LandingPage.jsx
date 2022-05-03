import LandingPageZone from "../../components/LandingPage/LandingPageZone/LandingPageZone";
import "./landingPage.css";
import PropTypes from "prop-types";

/**@returns The landing page */
const LandingPage = ({ isLogged }) => {
    return (
        <>
            <LandingPageZone isLogged={isLogged} />
        </>
    );
};

 LandingPage.propType = {
    isLogged: PropTypes.bool.isRequired,
};

export default LandingPage;
