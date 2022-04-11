import LoginForm from "../LoginForm/LoginForm";
import "./loginZone.css";
/** Display the login block where is displayed the log in form */
const LoginZone = () => {
    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <LoginForm />
        </section>
    );
};

export default LoginZone;
