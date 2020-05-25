import React from "react";
import classes from './Button.module.css';

const Button = (props) => {
    return (
        <div className={classes.buttonWrapper}>
            <button>Submit</button>
        </div>
    )
}

export default Button;