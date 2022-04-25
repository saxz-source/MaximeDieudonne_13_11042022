import PropTypes from "prop-types";
import StandardButton from "../../Utils/StandardButton";

/** @returns the name part of the account header with the button to modify */
const AccountOwnerName = ({ userName, toggleEditingName }) => {
    return (
        <>
            <span>
                {userName.firstName} {userName.lastName}!
            </span>

            <StandardButton
                clickAction={toggleEditingName}
                text={"Edit Name"}
                style={"edit-button"}
            ></StandardButton>
        </>
    );
};

AccountOwnerName.propType = {
    userName: PropTypes.object.isRequired,
    toggleEditingName: PropTypes.func.isRequired,
};

export default AccountOwnerName;
