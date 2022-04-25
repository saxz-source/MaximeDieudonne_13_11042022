import "./ProfileHeader.css";
import PropTypes from "prop-types";
import { useState } from "react";
import AccountOwnerName from "../AccountOwnerName/AccountOwnerName";
import ModifyName from "../ModifyName/ModifyName";

/**@returns the header of the profile page */
const ProfileHeader = ({ userName }) => {
    /** The toggle state to know if the edit form is open @type {boolean} */
    const [isEditing, setIsEditing] = useState(false);

    /**
     * Display or remove the form to edit the name
     * @returns {void}
     */
    const toggleEditingName = (e) => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="header">
            <h1>Welcome Back</h1>

            {!isEditing && (
                <AccountOwnerName
                    userName={userName}
                    toggleEditingName={toggleEditingName}
                />
            )}
            {isEditing && (
                <ModifyName
                    userName={userName}
                    toggleEditingName={toggleEditingName}
                />
            )}
        </div>
    );
};

ProfileHeader.propType = {
    userName: PropTypes.userName,
};

export default ProfileHeader;
