import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../style/About.css'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export function About(){
    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return(
        <>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <section className='container about-us'>
                <p>
                    At <span>SupaMoto</span>, we are passionate about providing an unparalleled car rental experience for our customers. Whether you're planning a family vacation, a business trip, or just need a reliable set of wheels, we've got you covered. Our commitment to excellence and customer satisfaction drives us to deliver top-notch service and a diverse fleet of vehicles to meet your needs.
                </p>
                <LazyLoadImage src="/src/assets/Saly-13.png" alt="Saly 13" />
            </section>
            <section className='container mission-story'>
                <div>
                    <p className='atitle'>
                        Our Mission
                    </p>
                    <p className='atext'>
                        At <span>SupaMoto</span>, our mission is clear: to provide hassle-free, reliable, and affordable car rental services. We aim to make your travel and transportation needs as seamless as possible while ensuring your safety and comfort are our top priorities.
                    </p>
                </div>
                <div>
                    <p className='atitle'>
                        Our Story
                    </p>
                    <p className='atext'>
                        Established in 2010, <span>SupaMoto</span> was born out of a desire to revolutionize the car rental industry. Our founder, John Smith, identified a need for a customer-centric, transparent, and cost-effective approach to car rentals. What started as a small, local venture has now grown into a trusted brand, serving both local and international travelers.
                    </p>
                </div>
                <LazyLoadImage src="/src/assets/Saly-44.png" alt="Saly 44" />
            </section>
            <section className='container team'>
                <p className='atitle'>
                    Meet the dedicated team behind <span>SupaMoto</span>. Our staff is a group of experienced professionals with a passion for delivering exceptional service. From our customer service representatives to our mechanics, each team member plays a vital role in ensuring your satisfaction.
                </p>
                <div className='team-container team1'>
                    <div className='member'>
                        <LazyLoadImage src='/src/assets/members/ceo.jpg' alt='CEO' />
                        <p><span>John Smith</span> - Founder & CEO</p>
                    </div>
                    <div className='member'>
                        <LazyLoadImage src='/src/assets/members/customer-rel.jpg' alt='Customer Relations Manager' />
                        <p><span>J.Sarah Davis</span> - Customer Relations Manager</p>
                    </div>
                </div>
                <div className='team-container team2'>
                    <div className='member'>
                        <LazyLoadImage src='/src/assets/members/fleet.jpg' alt='Fleet Manager' />
                        <p><span>Mark Johnson</span> - Fleet Manager</p>
                    </div>
                    <div className='member'>
                        <LazyLoadImage src='/src/assets/members/marketing.jpg' alt='Marketing' />
                        <p><span>Emily Wilson</span> - Marketing & Communications</p>
                    </div>
                    <div className='member'>
                        <LazyLoadImage src='/src/assets/members/mech.jpg' alt='Head Mechanic' />
                        <p><span>David Lee</span> - Head Mechanic</p>
                    </div>
                </div>
            </section>
            <section className='container afinal'>
                <div>
                    <p>
                        Have questions or need assistance? We're here to help. Reach out to us through our <Link onClick={() => handleClick()} to="../contact">contact</Link> page, and we'll respond promptly.
                    </p>
                    <p>
                        Thank you for choosing <span>SupaMoto</span>. We look forward to being your trusted partner for all your rental car needs.
                    </p>
                </div>
                <LazyLoadImage src="/src/assets/porche-contact.png" alt="Porcshe" />
            </section>
        </>
    );
}