import classes from './BookText.module.css';

const BookText = (props) => {
    return (
        <div className={classes['book-text']}>
            <span>Book A Table</span>
            <h2>Book Your Table For Private Dinners & Happy Hours</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi.<br /> Curabitur facilisis
                ornare velit non vulputate. Aliquam metus tortor, auctor id gravida<br /> condimentum, viverra quis sem.<br /><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi.<br /> Curabitur facilisis ornare
                velit non vulputate. Aliquam metus tortor, auctor id gravida<br /> condimentum, viverra quis sem. Curabitur non nisl
                nec nisi scelerisque maximus.<br /> Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.</p>
        </div>
    );
};

export default BookText;