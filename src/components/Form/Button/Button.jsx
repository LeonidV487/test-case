import React from "react";
import classes from './Button.module.css';

const Button = (props) => {

    let checkFields = () => {
        console.log('Error');
    }

    return (
        <div className={classes.buttonWrapper}>
            <button onClick={checkFields}>Submit</button>
        </div>
    )
}

export default Button;