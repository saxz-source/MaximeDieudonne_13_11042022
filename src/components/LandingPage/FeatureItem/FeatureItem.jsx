import "./featureItem.css"

const FeatureItem = ({ imgName, title, text }) => {

   console.log(imgName)
    return (
        <div className="feature-item">
            <img
                src= {`../../../assets/${imgName}`}
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
