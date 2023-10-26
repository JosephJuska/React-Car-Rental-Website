import '../style/Header.css';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
export function Header(){
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        window.scrollTo(0, 0);
        setOpen(false);
    };

    return(
        <header id="header">
            <div>
                <Link to="/">
                    <img className='logo' src="/src/assets/Logo.svg" alt="Logo" />
                </Link>
                <nav>
                    <ul className={`${open ? 'open' : ''}`}>
                        <li>
                            <NavLink to="/" onClick={() => handleClick()}>
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="rental" onClick={() => handleClick()}>
                                CARS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="about" onClick={() => handleClick()}>
                                ABOUT US
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="contact" onClick={() => handleClick()}>
                                CONTACT US
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='profile' to="#">
                                JUSGAMON
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <button className='menu' onClick={() => setOpen(prevOpen => !prevOpen)}>
                    {!open ? <i className="fa-solid fa-bars-staggered"></i> : <i className="fa-solid fa-x x"></i>}
                </button>
            </div>
        </header>
    );
}