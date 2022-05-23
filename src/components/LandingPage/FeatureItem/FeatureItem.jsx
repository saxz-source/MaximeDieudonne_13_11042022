import "./featureItem.css";
import PropTypes from "prop-types";

/** @returns a feature item (home page) */
const FeatureItem = ({ imgName, title, text }) => {
    return (
        <div className="feature-item">
            <img src={imgName} alt={imgName} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{text}</p>
        </div>
    );
};
FeatureItem.propType = {
    imgName: PropTypes.object.isRequired,
    title: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

export default FeatureItem;
