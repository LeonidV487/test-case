import React from "react";
import classes from './TextInput.module.css';

const TextInput = (props) => {
    return (
        <div className={classes.textWrapper}>
            <div className={classes.textInput}>
                <div>
                    <label>Your company name</label>
                </div>
                <div>
                    <input type="text"/>
                </div>
            </div>
            <div className={classes.textInput}>
                <div>
                    <label>Number of people</label>
                </div>
                <div>
                    <input type="text" placeholder="1-99"/>
                </div>
            </div>
        </div>
    )
}

export default TextInput;