import ProfilePageZone from "../../components/ProfilPage/ProfilePageZone/ProfilePageZone";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/** @returns the profile page container */
const ProfilePage = ({ user }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (user.isLogged === false) {
            navigate("/");
            return;
        }
    }, [user.isLogged]);

    return (
        <>
            <ProfilePageZone user={user} />
        </>
    );
};

ProfilePage.propTypes = {
    user: PropTypes.object,
};

export default ProfilePage;
