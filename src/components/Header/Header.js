import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    const location = useLocation();

    return (
        <header className={`${classes.navbar} ${location.pathname === '/menu' && classes.notHome}`}>
            <h1 className={classes.title}>
                <span className={classes['burger-span']}>Burger </span>
                <span className={classes['king-span']}>Coding</span>
            </h1>
            <ul className={classes.list}>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/menu'>Menu</Link>
                </li>
                <li>
                    <Link to='/booking'>Booking</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;