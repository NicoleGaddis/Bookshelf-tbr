import BookList from "./BookList";


const Books = (props) => {
    return (
        <>
            <BookList onClick={props.onShowBook}  refreshTrigger={props.refreshTrigger} />
        </>
    );
};

export default Books;