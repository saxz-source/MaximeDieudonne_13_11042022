import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

/**@returns The profile link in the header */
const ProfileLink = ({ firstName }) => {
    return (
        <li>
            <span>
                <FontAwesomeIcon icon={faUserCircle} />
            </span>
            <span className="navItem-span">{firstName}</span>
        </li>
    );
};

ProfileLink.propType = {
    firstName: PropTypes.string.isRequired,
};

export default ProfileLink;
