import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <li>
            <Link className="main-nav-item" to={"/login"}>
                <FontAwesomeIcon icon={faUserCircle} />
                <span className="signInSpan">Sign In</span>
            </Link>
        </li>
    );
};

export default SignIn;
