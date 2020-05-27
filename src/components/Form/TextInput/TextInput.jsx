import React from "react";
import classes from './TextInput.module.css';
import {updateCompanyActionCreator, updateNumberActionCreator} from "../../../redux/company-reducer";

const TextInput = (props) => {

    let updateCompanyText = (event) => {
        let text = event.target.value;
        let action = updateCompanyActionCreator(text);
        props.dispatch(action);
    }

    let updateNumberText = (event) => {
        let number = event.target.value;
        let action = updateNumberActionCreator(number);
        props.dispatch(action);
    }

    return (
        <div className={classes.textWrapper}>
            <div className={classes.textInput}>
                <div>
                    <label>Your company name</label>
                </div>
                <div>
                    <input onChange={updateCompanyText} type="text" value={props.companyInput.newTextCompanyName}/>
                </div>
            </div>
            <div className={classes.textInput}>
                <div>
                    <label>Number of people</label>
                </div>
                <div>
                    <input onChange={updateNumberText} type="text" placeholder="1-99"
                           value={props.companyInput.numberOfPeople}/>
                </div>
            </div>
        </div>
    )
}

export default TextInput;