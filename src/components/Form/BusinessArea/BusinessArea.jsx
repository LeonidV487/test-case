import React from "react";
import classes from './BusinessArea.module.css';

const BusinessArea = (props) => {
    return (
        <div className={classes.businessWrapper}>
            <div>
                <label>Business area</label>
            </div>
            <div>
                <input type="text" placeholder="Design, Marketing, Development, etc."/>
            </div>
        </div>
    )
}

export default BusinessArea;