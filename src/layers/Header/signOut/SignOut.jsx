import { useDispatch } from "react-redux";
import * as userAction from "../../../features/user.slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

/**@returns The signout element the header */
const SignOut = () => {
    const dispatch = useDispatch();

    /**
     * Call the sign out action
     * @returns {void}
     */
    const handleSignOut = () => {
        dispatch(userAction.logOutUser());
    };

    return (
        <li onClick={(e) => handleSignOut()}>
            <span>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </span>
            <span className="navItem-span">Sign out</span>
        </li>
    );
};

export default SignOut;
