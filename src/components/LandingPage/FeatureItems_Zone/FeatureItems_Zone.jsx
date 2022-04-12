import FeatureItem from "../FeatureItem/FeatureItem";
import "./featureItems_Zone.css";

const FeatureItemsZone = () => {
    const featureItemsData = [
        {
            imgName: "icon-chat.png",
            title: "You are our #1 priority",
            text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
        },
        {
            imgName: "icon-money.png",
            title: "More savings means higher rates",
            text: "The more you save with us, the higher your interest rate will be!",
        },
        {
            imgName: "icon-security.png",
            title: "Security you can trust",
            text: "We use top of the line encryption to make sure your data and money is always safe.",
        },
    ];

    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {featureItemsData.map((f, index) => {
                return (
                    <FeatureItem
                        imgName={f.imgName}
                        title={f.title}
                        text={f.text}
                        key={index + f.title}
                    />
                );
            })}
        </section>
    );
};

export default FeatureItemsZone;
