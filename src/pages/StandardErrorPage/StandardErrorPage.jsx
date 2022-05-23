import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { errorsActions } from "../../features/error.slice";

/**@returns The page to show globals errors to user (err 500 / no API connexion etc.) */
const StandardErrorPage = ({ errors }) => {
    const dispatch = useDispatch();

    const handleRetry = (e) => {
        e.preventDefault();
        dispatch(errorsActions.cleanErrors());
        return;
    };

    return (
        <main>
            <p> {errors.errorText} </p>

            <button onClick={handleRetry}>Recharger et rééssayer</button>
        </main>
    );
};

StandardErrorPage.proptypes = {
    error: PropTypes.obj,
};

export default StandardErrorPage;
