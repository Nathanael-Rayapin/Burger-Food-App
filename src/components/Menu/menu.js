import classes from './menu.module.css';
// Image
import burgerImg from '../../assets/image/burger.png';
import burgerAds from '../../assets/image/burgerAds.png';
import friesAds from '../../assets/image/friesAds.png';
import tacosImg from '../../assets/image/tacos.png';
import pizzaImg from '../../assets/image/pizza.png';


const Menu = (props) => {
    return (
        <div className={classes.menu}>
            <h1 className={classes.title}>Fast Food<br /><span>Menu</span></h1>
            <div className={classes.wrapper}>
                {/* Burger */}
                <div className={classes.burger}>
                    <img src={burgerImg} />
                </div>
                <div className={classes.burger}>
                    <h1>Burger</h1>
                    <p>8oz Angus beef, patty with lettuce, tomato, red onion.........$10.95</p>
                    <p>Black and Blue - Angus patty topped with creamy blue cheese.........$12.95</p>
                    <p>Applewood Smoked Cheddar - Angus patty with pickled red onions.........$12.95</p>
                </div>
                {/* Burger Ads */}
                <div className={classes.burgerAds}>
                    <div className={classes['d-flex-burgerAds']}>
                        <div className={classes.burgerAdsImg}>
                            <img src={burgerAds} />
                        </div>
                        <div className={classes.friesAdsImg}>
                            <img src={friesAds} />
                        </div>
                    </div>
                    <h1>burger &<br /> <span>fries</span></h1>
                </div>
                {/* Tacos */}
                <div className={classes.tacos}>
                    <h1>Tacos</h1>
                    <p>8oz Angus beef patty with lettuce, tomato, red onion.........$10.95</p>
                    <p>Black and Blue - Angus patty topped with creamy blue cheese.........$12.95</p>
                    <p>Applewood Smoked Cheddar - Angus patty with pickled red onions.........$12.95</p>
                </div>
                <div className={classes.tacos}>
                    <img src={tacosImg} />
                </div>
                <div className={classes.burgerAds}>
                    <p><span>$16.99<br /></span>
                        upsize<br />
                        your meal <br />for $2</p>
                </div>
            </div>
            {/* Pizza */}
            <div className={classes['d-flex']}>
                <div className={classes.pizzaImg}>
                    <img src={pizzaImg} />
                </div>
                <div className={classes.pizza}>
                    <h1>Pizza</h1>
                    <p>8oz Angus beef patty with lettuce, tomato, red onion.........$10.95</p>
                    <p>Black and Blue - Angus patty topped with creamy blue cheese.........$12.95</p>
                    <p>Applewood Smoked Cheddar - Angus patty with pickled red onions.........$12.95</p>
                </div>
            </div>
        </div>
    );
};

export default Menu;