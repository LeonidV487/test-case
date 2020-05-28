import React from "react";
import classes from './Button.module.css';
import {checkCompanyActionCreator} from "../../../redux/company-reducer";

const Button = (props) => {

    let checkFields = () => {
        let action = checkCompanyActionCreator(props.state.companyInput.newTextCompanyName)
        props.dispatch(action);
    }

    return (
        <div className={classes.buttonWrapper}>
            <button onClick={checkFields}>Submit</button>
        </div>
    )
}

export default Button;