import booksImage from '../../assets/books.jpg';
import classes from './Header.module.css';
import HeaderAddButton from './HeaderAddButton';

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>Book Shelf TBR</h1>
                <HeaderAddButton onClick={props.onShowShelf} />
            </header>
            <div className={classes['main-image']}>
                <img src={booksImage} alt="Dried flower on paper envelopes." />
            </div>
        </>
    );
};
export default Header;