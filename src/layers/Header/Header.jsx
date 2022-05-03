import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserName } from "../../features/user.selector";
import "./header.css";
import MainLogo from "./mainLogo/MainLogo";
import ProfileLink from "./profileLink/ProfileLink";
import SignOut from "./signOut/SignOut";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
/** @returns the header bar */
const Header = ({ isLogged }) => {
    /** @type {{firstName:string, lastName :string}} */
    const userName = useSelector(getUserName());

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to={"/"}>
                <MainLogo />
            </Link>

            <ul className="navList">
                {!isLogged && (
                    <li>
                        <Link className="main-nav-item" to={"/login"}>
                            <FontAwesomeIcon icon={faUserCircle} />
                            <span className="signInSpan">Sign In</span>
                        </Link>
                    </li>
                )}

                {isLogged && (
                    <Link to={"/profile"}>
                        <ProfileLink firstName={userName.firstName} />
                    </Link>
                )}
                {isLogged && <SignOut />}
            </ul>
        </nav>
    );
};

Header.propType = {
    isLogged: PropTypes.bool.isRequired,
};

export default Header;
