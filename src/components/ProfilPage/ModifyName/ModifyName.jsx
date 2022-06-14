import { useState } from "react";
import { useDispatch } from "react-redux";
import { modifyUserNameRequest } from "../../../features/user.slice";
import PropTypes from "prop-types";
import StandardButton from "../../Utils/StandardButton";
import "./ModifyName.css";
import { getTokenFromStorage } from "../../../utils/handleUserRemembering";

/** @returns The form to edit the name is the profile page */
const ModifyName = ({ user, toggleEditingName }) => {
    /** The first name of the user @type {string} */
    const [firstName, setFirstName] = useState(user?.firstName);
    /** The last name of the user @type {string} */
    const [lastName, setLastName] = useState(user?.lastName);

    const dispatch = useDispatch();

    /**
     * Cancel the action the user is making by removing the form
     * @param {*} e
     * @returns {void}
     */
    const handleCancelName = (e) => {
        e.preventDefault();
        toggleEditingName();
    };

    /**
     * Save the name entered by the user and remove the form
     * @param {*} e
     * @returns {void}
     */
    const handleSaveName = (e) => {
        e.preventDefault();
        if (firstName && lastName) {
            const thunkDatas = {
                apiPayload: {
                    firstName,
                    lastName,
                },
                token: getTokenFromStorage(),
            };
            dispatch(modifyUserNameRequest(thunkDatas));
        }
        toggleEditingName();
    };

    /**
     * Write the first name
     * @param {React.ChangeEvent<HTMLInputElement>} e
     * @returns {void}
     */
    const handleFirstName = (e) => {
        const firstName = e?.target?.value;
        if (firstName) setFirstName(firstName);
    };

    /**
     * write the last name
     * @param {React.ChangeEvent<HTMLInputElement>} e
     * @returns {void}
     */
    const handleLastName = (e) => {
        const lastName = e?.target?.value;
        if (lastName) setLastName(lastName);
    };

    return (
        <form className="modifyNameForm">
            <div className="input-wrapper formLines ">
                <input
                    type="text"
                    onChange={(e) => {
                        handleFirstName(e);
                    }}
                    placeholder={firstName}
                />
                <input
                    type="text"
                    onChange={(e) => {
                        handleLastName(e);
                    }}
                    placeholder={lastName}
                />
            </div>

            <div className="formLines">
                <StandardButton
                    text={"Save"}
                    clickAction={handleSaveName}
                    style="edit-button"
                ></StandardButton>
                <StandardButton
                    text={"Cancel"}
                    clickAction={handleCancelName}
                    style="edit-button"
                ></StandardButton>
            </div>
        </form>
    );
};

ModifyName.propType = {
    user: PropTypes.object.isRequired,
    toggleEditingName: PropTypes.func.isRequired,
};

export default ModifyName;
