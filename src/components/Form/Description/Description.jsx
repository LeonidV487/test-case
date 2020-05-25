import React from "react";
import classes from './Description.module.css';

const Description = (props) => {
    return (
        <div className={classes.descriptionWrapper}>
            <div>
                <label>Description</label>
            </div>
            <div>
               {/* <input type="text" placeholder="Type text"/>*/}
                <textarea placeholder="Type text"></textarea>
            </div>
        </div>
    )
}

export default Description;