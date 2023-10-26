import { Link } from "react-router-dom";
import '../style/Register.css';
import { Helmet } from "react-helmet";

export function Register(){
    const handleSubmit = (event:any) => {
        event.preventDefault();
    }

    return(
        <article className="register">
            <Helmet>
                <title>Register</title>
            </Helmet>
            <section>
                <form method="post" onSubmit={(e) => handleSubmit(e)}>
                    <p>Register</p>
                        <div>
                            <label htmlFor="username">
                                USERNAME
                            </label>
                            <input id='username' name='username' type="text" placeholder='Your username...' />
                        </div>
                        <div>
                            <label htmlFor="email">
                                EMAIL
                            </label>
                            <input id='email' name='email' type="email" placeholder='Your email...' />
                        </div>
                        <div>
                            <label htmlFor="password">
                                PASSWORD
                            </label>
                            <input id='password' name='password' type="password" placeholder='Your password...'/>
                        </div>
                        <div>
                            <label htmlFor="rpassword">
                                REPEAT PASSWORD
                            </label>
                            <input id='rpassword' name='rpassword' type="password" placeholder='Your password...'/>
                        </div>
                        <button>
                            REGISTER
                        </button>
                        <p className='login-text'>Already have an account? <Link to="../login">Login</Link></p>
                </form>
            </section>
        </article>
    );
}