import classes from './BookInput.module.css';

const BookInput = (props) => {
    return (
        <form className={classes.form}>
            <div className={classes['container-input']}>
                <input type="text" placeholder='Name' />
            </div>
            <div className={classes['container-input']}>
                <input type="email" placeholder='Email' />
            </div>
            <div className={classes['container-input']}>
                <input type="number" placeholder='Mobile' />
            </div>
            <div className={classes['container-input']}>
                <input type="text" placeholder='Date' />
            </div>
            <div className={classes['container-input']}>
                <input type="text" placeholder='Time' />
            </div>
            <div className={classes['container-input']}>
                <input type="text" placeholder='Guest' />
            </div>
            <div className={classes['container-button']}>
                <button>Book Now</button>
            </div>
        </form>
    );
};

export default BookInput;