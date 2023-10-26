import { Link } from "react-router-dom";
import '../style/Contact.css';
import { Helmet } from "react-helmet";
export function Contact(){
    return(
        <>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <section className="contact">
                <p className="ctitle">
                    Contact us today for all your car rental needs. Our dedicated team is here to assist you and ensure a seamless journey!
                </p>
                <div className="ccontainer">
                    <div className="call">
                        <p>
                            <i className="fa-solid fa-phone"></i> Call Us
                        </p>
                        <p>
                            General Inquiries: <span>(123) 456-7890</span>
                        </p>
                        <p>
                            Reservations: <span>(123) 555-6789</span>
                        </p>
                        <p>
                            Fax: <span>(123) 789-0123</span>
                        </p>
                    </div>
                    <div className="location">
                        <p>
                            <i className="fa-solid fa-building"></i> Meet Us
                        </p>
                        <p>
                            Main Office Address : <span>123 Main Street, University City, State 12345</span>
                        </p>
                        <p>
                            Mailing Address : <span>P.O. Box 987, University City, State 12345</span>
                        </p>
                        <p>
                            City Office : <span>P.O. Box 987, University City, State 12345</span>
                        </p>
                        <p>
                            Airport Branch : <span>P.O. Box 987, University City, State 12345</span>
                        </p>
                    </div>
                </div>
                <div className="ccontainer">
                    <div className="email">
                        <p>
                            <i className="fa-solid fa-at"></i> Mail Us
                        </p>
                        <p>
                            Support : <Link to="#">support@supamoto.com</Link>
                        </p>
                        <p>
                            Feedback : <Link to="#">feedback@supamoto.com.</Link>
                        </p>
                    </div>
                    <div className="social">
                        <p>
                            <i className="fa-solid fa-hashtag"></i> Follow Us
                        </p>
                        <p>
                            <i className="fa-brands fa-facebook"></i> : <Link to="#">@supamoto</Link>
                        </p>
                        <p>
                            <i className="fa-brands fa-x-twitter"></i> : <Link to="#">@supamoto</Link>
                        </p>
                        <p>
                            <i className="fa-brands fa-instagram"></i> : <Link to="#">@supamoto</Link>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}