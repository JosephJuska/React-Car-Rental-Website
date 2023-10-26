import { Link } from 'react-router-dom';
import '../style/Login.css';
import { Helmet } from 'react-helmet';

export function Login(){
    const handleSubmit = (event:any) => {
        event.preventDefault();
    }

    return(
        <article className="login">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <section>
                <form method="post" onSubmit={(e) => handleSubmit(e)}>
                    <p>LOGIN</p>
                        <div>
                            <label htmlFor="username">
                                USERNAME OR EMAIL
                            </label>
                            <input id='username' name='username' type="text" placeholder='Your username or email...' />
                        </div>
                        <div>
                            <label htmlFor="password">
                                PASSWORD
                            </label>
                            <input id='password' name='password' type="password" placeholder='Your password...'/>
                        </div>
                        <button>
                            LOGIN
                        </button>
                        <Link to="#" className='forgot'>Forgot my password</Link>
                        <p className='register-text'>Don't have an account? <Link to="../register">Register</Link></p>
                </form>
            </section>
        </article>
    );
}