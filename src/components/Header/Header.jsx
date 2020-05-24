import React from "react";
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <div>
            <header className={classes.header}>
                Your first project
            </header>
            <div className={classes.rounds}>
                <div className={classes.round1}>
                    <div className={classes.number1}>1</div>
                </div>
                <div className={classes.round2}>
                    <div className={classes.number2}>2</div>
                </div>
                <div className={classes.round3}>
                    <div className={classes.number3}>3</div>
                </div>
            </div>
        </div>
    );
}

export default Header;