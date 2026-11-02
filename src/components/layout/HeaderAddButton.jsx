// import { useContext, useEffect, useState } from 'react';
import BookIcon from '../books/BookIcon';
import classes from './HeaderAddButton.module.css';

const HeaderAddButton = (props) => {
    return (
        <>
            <button className={classes.button} onClick={props.onClick} >

                <span className={classes.icon}>
                    <BookIcon />
                </span>
                <span>Add Book</span>
                <span className={classes.badge}>+</span>
            </button>
        </>
    );
};
export default HeaderAddButton;