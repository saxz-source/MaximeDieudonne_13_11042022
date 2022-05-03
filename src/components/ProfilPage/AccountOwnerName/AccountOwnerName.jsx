import PropTypes from "prop-types";
import "./AccountOwnerName.css"

/** @returns the name part of the account header with the button to modify */
const AccountOwnerName = ({ userName }) => {
    return (
        <>
            <span className="accountOwnerName">
                {userName.firstName} {userName.lastName}!
            </span>

     
        </>
    );
};

AccountOwnerName.propType = {
    userName: PropTypes.object.isRequired,
    toggleEditingName: PropTypes.func.isRequired,
};

export default AccountOwnerName;
