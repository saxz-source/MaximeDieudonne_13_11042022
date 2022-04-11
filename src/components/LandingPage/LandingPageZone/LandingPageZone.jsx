import FeatureItems_Zone from "../FeatureItems_Zone/FeatureItems_Zone";
import LandingBanner from "../LandingBanner/LandingBanner";
import "./landingPageZone.css"

const LandingPageZone = () => {
    return (
        <main>
            <LandingBanner />
            <FeatureItems_Zone/>
        </main>
    );
};

export default LandingPageZone;
