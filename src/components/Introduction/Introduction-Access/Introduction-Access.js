import classes from './Introduction-Access.module.css';
const IntroductionAccess = (props) => {
    return (
        <div className={classes['intro-access']}>
            <h1>World's <span>Best </span>Chef</h1>
            <p>
                Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna. Morbi<br /> sagittis,
                orci sodales varius fermentum, tortor
            </p>
            <div>
                <button className={classes['button-view']}>View Menu</button>
                <button className={classes['button-book']}>Book Table</button>
            </div>
        </div>
    );
};

export default IntroductionAccess;