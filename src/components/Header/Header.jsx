import React from "react";
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header>
            <div className={classes.header}>
                Your first project
            </div>
            <div className={classes.rounds}>
                <div className={classes.round1}>
                    1
                </div>
                <div className={classes.round2}>
                    2
                </div>
                <div className={classes.round3}>
                    3
                </div>
            </div>
        </header>
    );
}

export default Header;