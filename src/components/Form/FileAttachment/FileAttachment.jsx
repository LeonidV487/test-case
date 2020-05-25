import React from "react";
import classes from './FileAttachment.module.css';

const FileAttachment = (props) => {
    return (
        <div className={classes.fileAttachmentWrapper}>
            <input type="file" name="file"/>
            <label>Add file as attachment</label>
        </div>
    )
}

export default FileAttachment;