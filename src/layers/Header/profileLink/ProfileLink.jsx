import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Loader from "../../../components/Utils/Loading/Loader";

/**@returns The profile link in the header */
const ProfileLink = ({ user }) => {
    if (user.loading) {
        return <Loader />;
    }

    return (
        <li>
            <span>
                <FontAwesomeIcon icon={faUserCircle} />
            </span>
            <span className="navItem-span">{user.firstName}</span>
        </li>
    );
};

ProfileLink.propType = {
    user: PropTypes.object.isRequired,
};

export default ProfileLink;
