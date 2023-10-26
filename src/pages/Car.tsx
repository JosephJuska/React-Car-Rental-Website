import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import { LazyLoadImage } from "react-lazy-load-image-component";
import '../style/Car.css';
import { Helmet } from "react-helmet";

interface Car {
    id: number;
    brand: string;
    expense: number;
    img: string;
    name: string
}

interface Count {
    [brand: string]: number
}
  
interface CarData {
    cars: Car[];
    counts: Count;
}
export function Car(){
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<null | Car[]>(null);
    const [rent, setRent] = useState(false);
    const [rented, setRented] = useState(false);

    const handleRent = () => {
        setRent(false);
        setRented(true);
    }

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await axios.get('/src/assets/cars.json');
                const data : CarData = response.data;
                setData(data.cars);
            } catch (error){
                console.log(error);
            }

            setLoading(false);
        }

        fetchData();
    }, []);
    
    const car = data?.find((car) => car.id.toString() === id);

    return(
        <section className="car-container">
            <Helmet>
                <title>{car?.name ? car?.name : 'Loading'}</title>
            </Helmet>
            {!car && !loading ? <div className="no-id"><p>Car ID not Found</p><p>Oops, you might have made a mistake</p></div> : 
            <div className="car-subcontainer">
                <div className="car-image">
                    <LazyLoadImage src={`${car?.img}`} alt="Car Image" />
                    <LazyLoadImage src={`/src/assets/brands/${car?.brand}.png`} alt="Brand Logo" />
                </div>
                <div className="car-bottom">
                    <div>
                        <p>
                            {car?.name}
                        </p>
                        <p>
                            <span>{car?.expense} $</span> / week
                        </p>
                    </div>
                    <button className={`rent-button ${rented ? 'rented' : ''}`} onClick={() => setRent(true)} disabled={rented}>
                        {rented ? 'RENTED' : 'RENT'}
                    </button>
                </div>
                <div className={`car-confirm ${rent ? 'show-rent' : ''}`}>
                    <p>
                        Are you sure about renting <span>{car?.name}</span> ?
                    </p>
                    <div>
                        <button onClick={() => handleRent()}>
                            YES
                        </button>
                        <button onClick={() => setRent(false)}>
                            NO
                        </button>
                    </div>
                </div>
            </div>
        }
        </section>
    );
}