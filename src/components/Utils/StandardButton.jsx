import "./standardButton.css";
import PropTypes from "prop-types";

/** @returns a button, shaped by its props */
const StandardButton = ({ text, clickAction, style }) => {
    const handleClick = (e) => {
        clickAction(e);
    };

    return (
        <button onClick={(e) => handleClick(e)} className={style}>
            {text}
        </button>
    );
};

StandardButton.propType = {
    /** The text written in the button @type {string} */
    text: PropTypes.string.isRequired,
    /** The action executed when we click on the button @type {()=>{any}} */
    clickAction: PropTypes.func.isRequired,
    /** The className to styel the button @type {string} */
    style: PropTypes.string.isRequired,
};

export default StandardButton;
