import topChef from '../../assets/image/TopChef.jpg';
import IntroductionAccess from './Introduction-Access/Introduction-Access';
import classes from './Introduction.module.css';

const Introduction = (props) => {
    return (
        <div className={classes['container-image']}>
            <div className={classes.backdrop}></div>
            <img className={classes.background} src={topChef} alt="Background" />
            <IntroductionAccess />
        </div>
    );
};

export default Introduction;