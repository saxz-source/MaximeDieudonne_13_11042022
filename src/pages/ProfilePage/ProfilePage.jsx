import { useDispatch, useSelector } from "react-redux";
import ProfilePageZone from "../../components/ProfilPage/ProfilePageZone/ProfilePageZone";
import { getUser } from "../../features/user.selector";
import Header from "../../layers/Header/Header";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { fetchUserName } from "../../API/APICalls";
import * as userAction from "../../features/user.slice";

/** @returns the profile page container */
const ProfilePage = ({ isLogged }) => {
    /** The user global object */
    const userState = useSelector(getUser());
    const dispatch = useDispatch();

    useEffect(() => {
        if (sessionStorage.token) {
            fetchUserName().then((res) => {
                dispatch(userAction.setUserName(res));
            });
        }
    });

    return (
        <>
            <Header isLogged={isLogged} firstName={userState.firstName} />
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
