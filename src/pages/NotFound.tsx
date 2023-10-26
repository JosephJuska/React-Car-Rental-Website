import { Helmet } from 'react-helmet';
import '../style/NotFound.css';

export function NotFound(){
    return(
        <section className="not-found">
            <Helmet>
                <title>
                    404 - Page not found
                </title>
            </Helmet>
            <p>
                404 - Page Not Found
            </p>
            <p>
                Oops, You Are Not In Right Place.
            </p>
        </section>
    );
}