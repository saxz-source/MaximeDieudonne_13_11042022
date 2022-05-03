import "./ProfileHeader.css";
import PropTypes from "prop-types";
import { useState } from "react";
import AccountOwnerName from "../AccountOwnerName/AccountOwnerName";
import ModifyName from "../ModifyName/ModifyName";
import StandardButton from "../../Utils/StandardButton";

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
            <h1>
                Welcome Back <br/>
                {!isEditing && (
                    <AccountOwnerName
                        userName={userName}
                        toggleEditingName={toggleEditingName}
                    />
                )}
            </h1>

            {!isEditing && (
                <StandardButton
                    clickAction={toggleEditingName}
                    text={"Edit Name"}
                    style={"edit-button"}
                ></StandardButton>
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
