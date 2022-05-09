import { Link } from "react-router-dom";
import "./header.css";
import MainLogo from "./mainLogo/MainLogo";
import ProfileLink from "./profileLink/ProfileLink";
import SignOut from "./signOut/SignOut";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
/** @returns the header bar */
const Header = ({ user }) => {
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to={"/"}>
                <MainLogo />
            </Link>

            <ul className="navList">
                {!user.isLogged && (
                    <li>
                        <Link className="main-nav-item" to={"/login"}>
                            <FontAwesomeIcon icon={faUserCircle} />
                            <span className="signInSpan">Sign In</span>
                        </Link>
                    </li>
                )}

                {user.isLogged && (
                    <Link to={"/profile"}>
                        <ProfileLink user={user} />
                    </Link>
                )}
                {user.isLogged && <SignOut />}
            </ul>
        </nav>
    );
};

Header.propType = {
    isLogged: PropTypes.bool.isRequired,
};

export default Header;
