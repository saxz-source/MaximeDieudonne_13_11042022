import "./Account.css";
import StandardButton from "../../Utils/StandardButton";
import PropTypes from "prop-types";

/**@returns An account */
const Account = ({ account }) => {
    const handleView = () => {
        return;
    };

    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{account.name}</h3>
                <p className="account-amount"> {account.amount} </p>
                <p className="account-amount-description">
                    {account.description}
                </p>
            </div>
            <div className="account-content-wrapper cta">
                <StandardButton
                    text="View transactions"
                    clickAction={handleView}
                    style="edit-button accountView"
                ></StandardButton>
            </div>
        </section>
    );
};

Account.propType = {
    account: PropTypes.object,
};

export default Account;
