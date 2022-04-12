import FeatureItemsZone from "../FeatureItems_Zone/FeatureItems_Zone";
import LandingBanner from "../LandingBanner/LandingBanner";
import "./landingPageZone.css"

const LandingPageZone = () => {
    return (
        <main>
            <LandingBanner />
            <FeatureItemsZone/>
        </main>
    );
};

export default LandingPageZone;
