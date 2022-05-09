import PropTypes from "prop-types";
import "./AccountOwnerName.css"

/** @returns the name part of the account header with the button to modify */
const AccountOwnerName = ({ user }) => {
    return (
        <>
            <span className="accountOwnerName">
                {user.firstName} {user.lastName}!
            </span>

     
        </>
    );
};

AccountOwnerName.propType = {
    user: PropTypes.object.isRequired,
    toggleEditingName: PropTypes.func.isRequired,
};

export default AccountOwnerName;
