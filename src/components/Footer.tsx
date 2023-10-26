import { Link, NavLink } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import '../style/Footer.css';

export function Footer(){
    const handleClick = (e:any) => {
        window.scrollTo(0, 0);
    };

    return(
        <footer>
            <div className='container-footer'>
                <div className='upper-footer'>
                    <LazyLoadImage src='/src/assets/Logo.svg' alt='SupaMoto Logo' />
                    <div>
                        <Link to="#">
                            <i className="fa-brands fa-instagram"></i>
                        </Link>
                        <Link to="#">
                            <i className="fa-brands fa-x-twitter"></i>
                        </Link>
                        <Link to="#">
                            <i className="fa-brands fa-facebook"></i>
                        </Link>
                    </div>
                </div>
                <div className='lower-footer'>
                    <div className='information-footer'>
                        <p>EXPLORE</p>
                        <ul>
                            <li>
                                <NavLink to="/" onClick={(e) => handleClick(e)}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="rental" onClick={(e) => handleClick(e)}>
                                    Cars
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="about" onClick={(e) => handleClick(e)}>
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="contact" onClick={(e) => handleClick(e)}>
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="login" onClick={(e) => handleClick(e)}>
                                    Login
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="register" onClick={(e) => handleClick(e)}>
                                    Register
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='information-footer'>
                        <p>ABOUT</p>
                        <ul>
                            <li>
                                <Link to="#">
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    Benefits
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='information-footer'>
                        <p>LEGAL</p>
                        <ul>
                            <li>
                                <Link to="#">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    Terms of use
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='brands-footer'>
                        <p>BRANDS</p>
                        <div className='brands-container'>
                            <LazyLoadImage className='footer-brand' src='/src/assets/brands/bentley.png' alt='BMW Logo' />
                            <LazyLoadImage className='footer-brand' src='/src/assets/brands/ferrari.png' alt='Ferrari Logo' />
                            <LazyLoadImage className='footer-brand' src='/src/assets/brands/porche.png' alt='Lamborghini Logo' />
                            <LazyLoadImage className='footer-brand' src='/src/assets/brands/tesla.png' alt='Tesla Logo' />
                        </div>
                    </div>
                </div>
                <p className='copyright'>© 2023 SupaMoto. All rights reserved.</p>
            </div>
        </footer>
    );
}