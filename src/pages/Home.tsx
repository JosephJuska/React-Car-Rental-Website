import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import '../style/Home.css';
import { Helmet } from "react-helmet";

export function Home(){
    return(
        <>
            <Helmet>
                <title>SupaMoto: Where Your Dreams Come True</title>
            </Helmet>
            <section className="container hero">
                <div>
                    <p className="title">
                        Unlock Your Journey, Rent Your Ride!
                    </p>
                    <p className="subtitle">
                        Embrace Adventure on Every Road, Discover Freedom with Our Rental Cars!
                    </p>
                    <Link to="rental">
                        GET YOUR RIDE
                    </Link>
                </div>
                <LazyLoadImage src="/src/assets/ferrari.png" alt="Nissan"/>
            </section>
            <section className="container why">
                <p>
                    Why Choose Us ?
                </p>
                <p className="reason">
                    <span>Wide Selection</span> - Select from our diverse fleet of vehicles to find the perfect ride that suits your needs and style. From compact cars to spacious SUVs and luxurious sedans, we have it all.
                </p>
                <p className="reason">
                    <span>Competitive Rates</span> - We offer some of the most competitive rental rates in the industry. Enjoy quality vehicles without breaking the bank.
                </p>
                <p className="reason"> 
                    <span>Convenient Locations</span> - With locations across the country, we make it easy for you to pick up and drop off your rental wherever your journey takes you.
                </p>
                <LazyLoadImage className="sally-1" src='/src/assets/Saly-1.svg' alt='Person'/>
                <LazyLoadImage className="star-1" src='/src/assets/star.png' alt='Star' />
                <LazyLoadImage className="star-2" src='/src/assets/star.png' alt='Star' />
            </section>
            <section className="container brands">
                <p>
                    Explore Our Brands
                </p>
                <p>
                At <span>SupaMoto</span>, we believe in offering you the best of the automotive world. That's why we've curated a selection of vehicles from renowned car manufacturers, each with its unique charm and features. When you rent a car with us, you're not just getting a mode of transportation; you're getting a piece of automotive excellence.
                </p>
                <div>
                    <LazyLoadImage className='brand' src='/src/assets/brands/bentley.png' alt='BMW Logo' />
                    <LazyLoadImage className='brand' src='/src/assets/brands/ferrari.png' alt='Ferrari Logo' />
                    <LazyLoadImage className='brand' src='/src/assets/brands/porche.png' alt='Lamborghini Logo' />
                    <LazyLoadImage className='brand' src='/src/assets/brands/tesla.png' alt='Tesla Logo' />
                </div>
            </section>
            <section className="container customers">
                <p className="title">
                    What Our Customers Say?
                </p>
                <div className="testimonials">
                    <div className="testimonial-card">
                        <LazyLoadImage className="tbrand" src="/src/assets/brands/bentley.png" alt="Bentley Logo" />
                        <div>
                            <p className="customer">
                                Jane D.
                            </p>
                            <p className="testimonial">
                                "I recently rented a car from <span>SupaMoto</span>, and the experience exceeded my expectations. The vehicle was not only in pristine condition but also provided me with a smooth and comfortable ride throughout my road trip. The staff was exceptionally helpful and professional, making the rental process a breeze. I couldn't have asked for a better experience and will undoubtedly choose <span>SupaMoto</span> for my future travels."
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <LazyLoadImage className="tbrand" src="/src/assets/brands/porche.png" alt="Porche Logo" />
                        <div>
                            <p className="customer">
                                Robert S.
                            </p>
                            <p className="testimonial">
                                "As a frequent traveler, I've rented cars from various companies, but <span>SupaMoto</span> stands out for its excellent service. The car I rented was clean, well-maintained, and fuel-efficient, which was a big plus for my budget. The convenience of their multiple pickup and drop-off locations made my trip hassle-free. I highly recommend <span>SupaMoto</span> to anyone looking for a top-notch car rental service."
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <LazyLoadImage className="tbrand" src="/src/assets/brands/tesla.png" alt="Tesla Logo" />
                        <div>
                            <p className="customer">
                                Lisa M.
                            </p>
                            <p className="testimonial">
                                "My family and I rented a beautiful vehicle from <span>SupaMoto</span> for a cross-country road trip. From the moment we picked up the vehicle, we felt safe and comfortable.<span>SupaMoto</span> made sure we had everything we needed, and their commitment to customer satisfaction truly impressed us. We'll definitely choose <span>SupaMoto</span> for all our future adventures."
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}