import React from "react";
import classes from './Form.module.css';
import TextInput from "./TextInput/TextInput";
import BusinessArea from "./BusinessArea/BusinessArea";

const Form = (props) => {
    return (
        <form className={classes.mainForm}>
           <TextInput />
           <BusinessArea />

        </form>
    )
}

export default Form;