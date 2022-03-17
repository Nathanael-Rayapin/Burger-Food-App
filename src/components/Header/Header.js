import { Fragment } from 'react';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <Fragment>
            <div className={classes.navbar}>
                <h1 className={classes.title}>
                    <span className={classes['burger-span']}>Burger </span>
                    <span className={classes['king-span']}>King</span>
                </h1>
                <ul className={classes.list}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Feature</li>
                    <li>Chef</li>
                    <li>Menu</li>
                    <li>Booking</li>
                    <li>Page</li>
                    <li>Contact</li>
                </ul>
            </div>
        </Fragment>
    );
};

export default Header;