import { useEffect, useState } from 'react';
import classes from './BookList.module.css';
import Card from '../ui/Card';
import BookItem from './book-item/BookItem';
import useHTTP from '../../../../book-app/src/hooks/useHTTP';

const BookList = (props) => {

    const { isLoading, error, sendRequest: fetchBooks } = useHTTP();

    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    function searchInputChangeHandler(event) {
        setSearchTerm(event.target.value);
    }

    useEffect(() => {
        const fetchBooksHandler = (responseData) => {
            const loadedBooks = [];
            for (const key in responseData) {
                loadedBooks.push({
                    id: key,
                    title: responseData[key].title,
                    author: responseData[key].author,
                    description: responseData[key].description,
                    format: responseData[key].format,
                    len: responseData[key].len,
                    collection: responseData[key].collection,
                    type: responseData[key].type,
                    volume: responseData[key].volume,


                });
            }
            setBooks(loadedBooks);
        };
        /**********/
        //Gemini was used to help create this fetch request
        let url = 'https://bookshelf-tbr-default-rtdb.firebaseio.com/Books.json';

        //  Modify URL parameters if the user typed a search term
        if (searchTerm.trim() !== '') {
            const orderBy = encodeURIComponent('"title"');
            const startAt = encodeURIComponent(`"${searchTerm}"`);
            const endAt = encodeURIComponent(`"${searchTerm}\uf8ff"`);
            url = `${url}?orderBy=${orderBy}&startAt=${startAt}&endAt=${endAt}`;
        }

        // 3. Fire the request
        fetchBooks(url, 
            /**********/
            {},
            fetchBooksHandler);
        
    }, [fetchBooks, searchTerm, props.refreshTrigger]);

    const booksList = books.map((book) => (
        <BookItem
            id={book.id}
            key={book.id}
            title={book.title}
            author={book.author}
            description={book.description}
            format={book.format}
            len={book.len}
            collection={book.collection}
            type={book.type}
            volume={book.volume}
            onClick={props.onClick}
        />
    ));


    let content = <p>No books found.</p>;

    if (books.length > 0) {
        content =
            <ul>{booksList}</ul>;
    }

    if (error) {
        content =
            <section className={classes.BooksError}>
                <p>{httpError}</p>
            </section>
    }

    if (isLoading) {
        content =
            <section className={classes.BooksLoading}>
                <p>Loading books...</p>
            </section>
    }

    return (
        <>
        <section className={classes.books}>
            <h3>*** Extra Feature ***</h3>
            <div className={classes.searchContainer}>
                <input
                    type="text"
                    placeholder="Search books by title..."
                    value={searchTerm}
                    onChange={searchInputChangeHandler}
                    className={classes.searchInput}
                />
            </div>
        </section>
        <section className={classes.books}>

            

            <Card>
                {content}
            </Card>

        </section>
        </>
    );
};
export default BookList;