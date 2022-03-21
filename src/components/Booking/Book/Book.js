import BookInput from './Book-Input/BookInput';
import BookText from './Book-Text/BookText';
import classes from './Book.module.css';

const Book = (props) => {
    return (
        <div className={classes.book}>
            <BookText />
            <BookInput />
        </div>
    );
};

export default Book;