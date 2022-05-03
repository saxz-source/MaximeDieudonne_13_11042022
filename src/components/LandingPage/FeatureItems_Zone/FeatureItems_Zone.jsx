import FeatureItem from "../FeatureItem/FeatureItem";
import "./featureItems_Zone.css";
import iconChat from "../../../assets/icon-chat.png";
import iconMoney from "../../../assets/icon-money.png";
import iconSecurity from "../../../assets/icon-security.png";

const FeatureItemsZone = () => {
    const featureItemsData = [
        {
            imgName: iconChat,
            title: "You are our #1 priority",
            text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
        },
        {
            imgName: iconMoney,
            title: "More savings means higher rates",
            text: "The more you save with us, the higher your interest rate will be!",
        },
        {
            imgName: iconSecurity,
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
