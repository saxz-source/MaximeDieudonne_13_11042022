import "./Account.css";
/** An account */
const Account = ({ account }) => {
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
                <button className="transaction-button">
                    View transactions
                </button>
            </div>
        </section>
    );
};

export default Account;
