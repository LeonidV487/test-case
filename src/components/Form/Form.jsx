import React from "react";
import classes from './Form.module.css';
import TextInput from "./TextInput/TextInput";
import BusinessArea from "./BusinessArea/BusinessArea";
import Description from "./Description/Description";
import FileAttachment from "./FileAttachment/FileAttachment";
import StyledComponents from "./Button/Button";

const Form = (props) => {
    return (
        <form className={classes.mainForm}>
           <TextInput />
           <BusinessArea />
           <Description />
           <FileAttachment />
           <StyledComponents/>
        </form>
    )
}

export default Form;