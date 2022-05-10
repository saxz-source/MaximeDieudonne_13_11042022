import "./header.css";
import MainLogo from "./mainLogo/MainLogo";
import ProfileLink from "./profileLink/ProfileLink";
import SignOut from "./signOut/SignOut";
import PropTypes from "prop-types";

import SignIn from "./signIn/SignIn";
/** @returns the header bar */
const Header = ({ user }) => {
    return (
        <nav className="main-nav">
            <MainLogo />
            <ul className="navList">
                {!user.isLogged && <SignIn />}
                {user.isLogged && <ProfileLink user={user} />}
                {user.isLogged && <SignOut />}
            </ul>
        </nav>
    );
};

Header.propType = {
    isLogged: PropTypes.object.isRequired,
};

export default Header;
