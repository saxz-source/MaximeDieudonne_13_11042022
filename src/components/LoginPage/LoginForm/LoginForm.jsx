import { useState } from "react";
import "./loginForm.css";

const LoginForm = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState("");
    /**
     * Save the value written in the user name field
     * @param {Event} e
     * @returns {void}
     */
    const handleUsername = (e) => setUserName(e.target.value);
    /**
     * Save the value written in the password field
     * @param {Event} e
     * @returns {void}
     */
    const handlePassword = (e) => setPassword(e.target.value);
    /**
     * Save the value of the check box
     * @param {Event} e
     * @returns {void}
     */
    const handleRememberMe = (e) => setRememberMe(e.target.value);

    const handleForm = ()=>{

        const payload = {
            email : userName,
            password
        }

        

    }

    return (
        <form>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    onChange={handleUsername}
                    value={userName}
                    minLength={1}
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    onChange={handlePassword}
                    value={password}
                    minLength={1}

                />
            </div>
            <div className="input-remember">
                <input
                    type="checkbox"
                    id="remember-me"
                    onChange={handleRememberMe}
                    value={rememberMe}
                />
                <label htmlFor="remember-me">Remember me</label>
            </div>

            <button className="sign-in-button" >Sign In</button>
        </form>
    );
};

export default LoginForm;
