import React from "react";
import classes from './BusinessArea.module.css';

const BusinessArea = (props) => {
    return (
        <div className={classes.businessWrapper}>
           <label>Business area</label>
            <br/>
            <input type="text" placeholder="Design, Marketing, Development, etc."/>
        </div>
    )
}

export default BusinessArea;