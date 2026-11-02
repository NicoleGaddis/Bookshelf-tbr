import { useRef, useState } from 'react';
import classes from "./Shelf.module.css"
import Modal from '../UI/Modal';
import useHTTP from '../../../../book-app/src/hooks/useHTTP';

const Shelf = (props) => {

    const { isLoading, error, sendRequest: sendBooks } = useHTTP();

    const submitHandler = (bookData) => {
        // const fetchBooksHandler = (responseData) => {
        //     const loadedBooks = [];
        //     for (const key in responseData) {
        //         loadedBooks.push({
        //             id: key,
        //             name: responseData[key].name,
        //             author: responseData[key].author,
        //             description: responseData[key].description,
        //             format: responseData[key].format,
        //             len: responseData[key].len,
        //             collection: responseData[key].collection,
        //             type: responseData[key].type,
        //             volume: responseData[key].volume,


        //         });
        //     }
        //     setBooks(loadedBooks);
        // };

        sendBooks(`https://bookshelf-tbr-default-rtdb.firebaseio.com/Books.json`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: {
                    ...bookData
                },
            },
            (data) => {
                console.log('Book added successfully:', data);
                props.onRefresh(); 
            });
        titleInputRef.current.value = "";
        authorInputRef.current.value = "";
        descriptionInputRef.current.value = "";
        formatInputRef.current.value = "";
        lengthInputRef.current.value = "";
        collectionInputRef.current.value = "";
        volumeInputRef.current.value = "";
        typeInputRef.current.value = "";

    };

    const isEmpty = (value) => value.trim() === '';

    const [formInputValidity, setFormInputValidity] = useState({
        title: true,
        author: true,
        description: true,
        format: true,
        len: true,
        collection: true,
        volume: true,
        type: true,
    });

    const titleInputRef = useRef();
    const authorInputRef = useRef();
    const descriptionInputRef = useRef();
    const formatInputRef = useRef(); //might not need
    const lengthInputRef = useRef();
    const collectionInputRef = useRef(); //might not need
    const volumeInputRef = useRef();
    const typeInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredAuthor = authorInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const enteredFormat = formatInputRef.current.value;
        const enteredLength = lengthInputRef.current.value;
        const enteredCollection = collectionInputRef.current.value;
        const enteredVolume = volumeInputRef.current.value;
        const enteredType = typeInputRef.current.value;

        const enteredTitleIsValid = !isEmpty(enteredTitle);
        const enteredAuthorIsValid = !isEmpty(enteredAuthor);
        const enteredDescriptionIsValid = !isEmpty(enteredDescription);
        const enteredFormatIsValid = !isEmpty(enteredFormat);
        const enteredLengthIsValid = !isEmpty(enteredLength);
        const enteredCollectionIsValid = !isEmpty(enteredCollection);
        const enteredVolumeIsValid = !isEmpty(enteredVolume);
        const enteredTypeIsValid = !isEmpty(enteredType);

        setFormInputValidity({
            title: enteredTitleIsValid,
            author: enteredAuthorIsValid,
            description: enteredDescriptionIsValid,
            format: enteredFormatIsValid,
            len: enteredLengthIsValid,
            collection: enteredCollectionIsValid,
            volume: enteredVolumeIsValid,
            type: enteredTypeIsValid,

        });

        const formIsValid =
            enteredTitleIsValid &&
            enteredAuthorIsValid &&
            enteredDescriptionIsValid &&
            enteredFormatIsValid &&
            enteredLengthIsValid &&
            enteredCollectionIsValid &&
            enteredVolumeIsValid &&
            enteredTypeIsValid;
        if (!formIsValid) {
            return;
        }

        submitHandler({
            title: enteredTitle,
            author: enteredAuthor,
            description: enteredDescription,
            format: enteredFormat,
            len: enteredLength,
            collection: enteredCollection,
            volume: Number(enteredVolume),
            type: enteredType,
        });
    };



    const titleControlClasses = `${classes.control} ${formInputValidity.title ? '' : classes.invalid
        }`;
    const authorControlClasses = `${classes.control} ${formInputValidity.author ? '' : classes.invalid
        }`;
    const descriptionControlClasses = `${classes.control} ${formInputValidity.description ? '' : classes.invalid
        }`;
    const FormatControlClasses = `${classes.control} ${formInputValidity.format ? '' : classes.invalid
        }`;
    const lengthControlClasses = `${classes.control} ${formInputValidity.len ? '' : classes.invalid
        }`;
    const collectionControlClasses = `${classes.control} ${formInputValidity.collection ? '' : classes.invalid
        }`;
    const volumeControlClasses = `${classes.control} ${formInputValidity.volume ? '' : classes.invalid
        }`;
    const typeControlClasses = `${classes.control} ${formInputValidity.type ? '' : classes.invalid
        }`;

    return (
        <Modal onClose={props.onCloseShelf}>
            {/* {shelfItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>$29.98</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseShelf}>Close</button>
                <button className={classes.button}>Add</button>
            </div> */}
            <form className={classes.form} onSubmit={confirmHandler}>
                <div className={titleControlClasses}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" ref={titleInputRef} />
                    {!formInputValidity.title && <p>Please enter a valid title!</p>}
                </div>
                <div className={authorControlClasses}>
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" ref={authorInputRef} />
                    {!formInputValidity.author && <p>Please enter a valid author!</p>}
                </div>
                <div className={descriptionControlClasses}>
                    <label htmlFor="description">Book Summary</label>
                    <input type="text" id="description" ref={descriptionInputRef} />
                    {!formInputValidity.description && <p>Please enter a valid summary!</p>}
                </div>

                {/* change to drop down */}
                <div className={FormatControlClasses}>
                    <label htmlFor="format">Format</label>
                    <input type="text" id="format" ref={formatInputRef} />
                    {!formInputValidity.format && <p>Please enter a valid format ex: Novel, comic, audio, ect.!</p>}
                </div>

                <div className={lengthControlClasses}>
                    <label htmlFor="len">Length</label>
                    <input type="text" id="len" ref={lengthInputRef} />
                    {!formInputValidity.len && <p>Please enter a valid length with units pgs or hours and min!</p>}
                </div>

                {/* change to drop down */}
                <div className={collectionControlClasses}>
                    <label htmlFor="collection">Collection</label>
                    <input type="text" id="collection" ref={collectionInputRef} />
                    {!formInputValidity.collection && <p>Please enter a valid collection!</p>}
                </div>

                <div className={typeControlClasses}>
                    <label htmlFor="type">Series Type</label>
                    <input type="text" id="type" ref={typeInputRef} />
                    {!formInputValidity.type && <p>Please enter a valid type!</p>}
                </div>
                <div className={volumeControlClasses}>
                    <label htmlFor="volume">Volume</label>
                    <input type="number" id="volume" min={0} ref={volumeInputRef} />
                    {!formInputValidity.volume && <p>Please enter a valid volume number!</p>}
                </div>
                <div className={classes.actions}>
                    <button type="button" onClick={props.onCloseShelf}>Close</button>
                    <button className={classes.submit} onClick={confirmHandler}>Add</button>
                </div>
            </form>
        </Modal>
    );
};
export default Shelf;