import { useDispatch, useSelector } from "react-redux";
import ProfilePageZone from "../../components/ProfilPage/ProfilePageZone/ProfilePageZone";
import { getUser } from "../../features/user.selector";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { fetchUserName } from "../../API/APICalls";
import * as userAction from "../../features/user.slice";
import { useNavigate } from "react-router-dom";

/** @returns the profile page container */
const ProfilePage = ({ isLogged }) => {
    /** The user global object */
    const userState = useSelector(getUser());

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogged === false) {
            navigate("/");
            return;
        }

        if (localStorage.token) {
            fetchUserName()
                .then((res) => {
                    dispatch(userAction.setUserName(res));
                })
                .catch((ee) => console.log(ee));
            return;
        }
    }, [isLogged]);

    return (
        <>
            <ProfilePageZone
                isLogged={isLogged}
                userName={{
                    firstName: userState.firstName,
                    lastName: userState.lastName,
                }}
            />
        </>
    );
};

ProfilePage.propTypes = {
    isLogged: PropTypes.bool.isRequired,
};

export default ProfilePage;
