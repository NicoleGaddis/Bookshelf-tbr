import { useContext } from 'react';
import classes from './BookItem.module.css';
//import CartContext from '../../../store/CartContext';

const BookItem = (props) => {

    //const cartCtx = useContext(CartContext);
    // This JavaScript number method ensures our numeric price always 
    // renders with two decimal places (e.g., 12.5 becomes $12.50)

    // const addToCartHandler = (amount) => {
    //     cartCtx.addItem({
    //         id: props.id,
    //         title: props.title,
    //         amount: amount,
    //         price: props.price,
    //     });
    // };

    return (
        <li className={classes.book}>
            <div>
                <h3>{props.title} VOL: {props.volume}</h3>
                <h4> Written by {props.author} </h4>

                <br/>
                <div className={classes.description} >{props.description}</div>
                <br/>

                <div className={classes.details}> Format: {props.format} </div>
                {/* tropes */}
                <div className={classes.details}> Length: {props.len} </div>
                {/* might change to a drop down for edits */}
                <div className={classes.details}> Collection: {props.collection} </div> 
                <div className={classes.details}> Type: {props.type} </div>
            </div>
            <div className={classes.form}>
            {/* Edit button not yet done */}
                {/* <button onClick={props.onClick} >Edit</button> */}
                
            </div>
        </li>
    );
};
export default BookItem;