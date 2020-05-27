import React from "react";
import classes from './BusinessArea.module.css';
import {updateBusinessAreaActionCreator} from "../../../redux/business-reducer";

const BusinessArea = (props) => {

    let updateBusinessAreaText = (event) => {
        let text = event.target.value;
        let action = updateBusinessAreaActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={classes.businessWrapper}>
            <div>
                <label>Business area</label>
            </div>
            <div>
                <input onChange={updateBusinessAreaText} type="text" placeholder="Design, Marketing, Development, etc."
                       value={props.businessInput.businessAreaText}/>
            </div>
        </div>
    )
}

export default BusinessArea;