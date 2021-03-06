import Account from "../Account/Account";
import "./AccountZone.css";

/** Display the accounts */
const AccountZone = () => {
    const accounts = [
        {
            name: "Argent Bank Checking (x8349)",
            amount: "$2,082.79",
            description: "Available Balance",
        },
        {
            name: "Argent Bank Checking (x8349)",
            amount: "$2,082.79",
            description: "Available Balance",
        },
        {
            name: "Argent Bank Checking (x8349)",
            amount: "$2,082.79",
            description: "Available Balance",
        },
    ];

    return accounts.map((account, index) => {
        return <Account account={account} key={index + account.name} />;
    });
};

export default AccountZone;
