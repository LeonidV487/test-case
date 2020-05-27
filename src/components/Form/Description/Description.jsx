import React from "react";
import classes from './Description.module.css';
import {updateDescriptionActionCreator} from "../../../redux/description-reducer";

const Description = (props) => {

    let updateDescriptionText = (event) => {
        let text = event.target.value;
        let action = updateDescriptionActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={classes.descriptionWrapper}>
            <div>
                <label>Description</label>
            </div>
            <div>
                <textarea onChange={updateDescriptionText} placeholder="Type text"
                          value={props.descriptionInput.descriptionText}/>
            </div>
        </div>
    )
}

export default Description;