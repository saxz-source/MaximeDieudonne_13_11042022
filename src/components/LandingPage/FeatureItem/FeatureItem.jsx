import "./featureItem.css"

const FeatureItem = ({ imgName, title, text }) => {


    return (
        <div className="feature-item">
            <img
                src= {imgName}
                alt={imgName}
                className="feature-icon"
            />
            <h3 className="feature-item-title">{title}</h3>
            <p>
               {text}
            </p>
        </div>
    );
};

export default FeatureItem
