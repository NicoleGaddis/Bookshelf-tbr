import classes from "./EditBook.module.css"
import Modal from '../UI/Modal';

const EditBook = (props) => {
    // Temporary hardcoded item array to model shelf data structure
    // const shelfItems = (
    //     <ul className={classes['shelf-items']}>
    //         {[
    //             {
    //                 id: 'c1',
    //                 name: 'The Great Gatsby',
    //                 amount: 2,
    //                 price: 14.99,
    //             },
    //         ].map((item) => (
    //             <li key={item.id}>{item.name}</li>
    //         ))}
    //     </ul>
    // );
    const confirmHandler = (event) => {
        event.preventDefault();
        // TODO: Complete submission logic
    };
    return (
        <Modal onClose={props.onCloseBook}>
            <form className={classes.form} onSubmit={confirmHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Book Summary</label>
                    <input type="text" id="description" />
                </div>

                {/* change to drop down */}
                <div className={classes.control}>
                    <label htmlFor="format">Format</label>
                    <input type="text" id="format" />
                </div>

                <div className={classes.control}>
                    <label htmlFor="len">Length</label>
                    <input type="text" id="len" />
                </div>

                {/* change to drop down */}
                <div className={classes.control}>
                    <label htmlFor="collection">Collection</label>
                    <input type="text" id="collection" />
                </div>

                <div className={classes.control}>
                    <label htmlFor="type">Series Type</label>
                    <input type="text" id="type" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="volume">Volume</label>
                    <input type="number" id="volume" min={0} />
                </div>
                 <div className={classes.actions}>
                <button type="button" onClick={props.onCloseBook}>Close</button>
                <button className={classes.submit}>Update</button>
            </div>
            </form>
            {/* {shelfItems} */}
            {/* <div className={classes.total}>
                <span>Total Amount</span>
                <span>$29.98</span>
            </div> 
            
            <button className={classes['button--alt']} onClick={props.onCloseBook}>Close</button>
                <button className={classes.button}>Update</button>*/}
           
        </Modal>
    );
};
export default EditBook;