import "./ProfileHeader.css";
import PropTypes from "prop-types";
import { useState } from "react";
import AccountOwnerName from "../AccountOwnerName/AccountOwnerName";
import ModifyName from "../ModifyName/ModifyName";
import StandardButton from "../../Utils/StandardButton";
import Loader from "../../Utils/Loading/Loader";

/**@returns the header of the profile page */
const ProfileHeader = ({ user }) => {
    /** The toggle state to know if the edit form is open @type {boolean} */
    const [isEditing, setIsEditing] = useState(false);

    /**
     * Display or remove the form to edit the name
     * @returns {void}
     */
    const toggleEditingName = (e) => {
        setIsEditing(!isEditing);
    };

    if (user.isLoading) {
        return <Loader />;
    }

    return (
        <div className="header">
            <h1>
                Welcome Back <br />
                {!isEditing && (
                    <AccountOwnerName
                        user={user}
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
                <ModifyName user={user} toggleEditingName={toggleEditingName} />
            )}
        </div>
    );
};

ProfileHeader.propType = {
    user: PropTypes.object,
};

export default ProfileHeader;
