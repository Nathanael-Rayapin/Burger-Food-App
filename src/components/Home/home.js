import { Fragment } from "react";
import ContactInfo from "./Footer/Contact-Info/contact-info";
import Introduction from "./Introduction/Introduction";

const Home = () => {
    return (
        <Fragment>
            <Introduction />
            <ContactInfo />
        </Fragment>
    );
};

export default Home;