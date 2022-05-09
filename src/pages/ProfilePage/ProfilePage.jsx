import { useDispatch, useSelector } from "react-redux";
import ProfilePageZone from "../../components/ProfilPage/ProfilePageZone/ProfilePageZone";
import { getUser } from "../../features/user.selector";
import PropTypes from "prop-types";
import { useEffect } from "react";
//import { fetchUserName } from "../../API/APICalls";
//import userActions  from "../../features/user.slice";
import * as userActions from "../../features/user.slice";

import { useNavigate } from "react-router-dom";

/** @returns the profile page container */
const ProfilePage = ({ user }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (user.isLogged === false) {
            navigate("/");
            return;
        }

        if (localStorage.token) {
            dispatch(userActions.fetchUserRequest());
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
