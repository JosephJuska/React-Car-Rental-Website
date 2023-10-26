import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import '../style/Rental.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Pagination } from "../components/Pagination";
import { CarCard } from "../components/CarCard";
import { Helmet } from 'react-helmet';

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

export function Rental(){
    const [loading, setLoading] = useState(true);
    const [carData, setCarData] = useState<null | Car[]>(null);
    const [counts, setCounts] = useState<null | Count>(null);
    const [data, setData] = useState<null | Car[]>(null);

    const [p, setP] = useState(false);
    const [f, setF] = useState(false);
    const [t, sett] = useState(false);
    const [b, setB] = useState(false);

    const [s, setS] = useState(0);
    const [fopen, setFopen] = useState(false);
    const [open, setOpen] = useState(false);

    const [page, setPage] = useState(0);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [disableItem, setDisableItem] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      useEffect(() => {
        const minWidthForDisable = 850;
    
        if (windowWidth < minWidthForDisable) {
          setDisableItem(true);
        } else {
          setDisableItem(false);
        }
      }, [windowWidth]);

    const sorter = (data: null|Car[], s: number) => {
        if(!data){
            return null;
        }

        if(s === 0 ) {
            return data.slice().sort((a, b) => a.id - b.id);
        } else if(s === 1 ) {
            return data.slice().sort((a, b) => b.expense - a.expense);
        } else {
            return data.slice().sort((a, b) => a.expense - b.expense);
        }
    }

    const selectedData: Car[] | null = sorter(data, s);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await axios.get('/src/assets/cars.json');
                const data : CarData = response.data;
                setCarData(data.cars);
                setData(data.cars);
                setCounts(data.counts);
            } catch (error){
                console.log(error);
            }

            setLoading(false);
        }

        fetchData();
    }, []);

    useEffect(() => {
        if(!carData) {
            return;
        }

        if(!p && !t && !f && !b ){
            setData(carData);
        } else {
            const new_data = carData.filter((car) => {
                return (p && car.brand === 'porche') ||
                    (t && car.brand === 'tesla') ||
                    (f && car.brand === 'ferrari') ||
                    (b && car.brand === 'bentley');
            });

            setPage(0);
            setData(new_data);
        }
    }, [p, t, f, b]);

    const handleClick = (type: string) => {
        if(type === 'f') {
            setFopen(prev => !prev);
            setOpen(false);
        } else {
            setFopen(false);
            setOpen(prev => !prev);
        }
    }

    return(
        <section className="rental">
            <Helmet>
                <title>Cars</title>
            </Helmet>
            <div className="filter">
                <div className="filter-container">
                    <p onClick={() => disableItem ? handleClick('f') : () => {}}>Filter:</p>
                    <div className={`checkboxes ${fopen ? 'fopen' : ''}`}>
                        <Link to="#" className={`checkbox ${p ? 'checked' : ''}`} onClick={() => setP(prev => !prev)}>
                            PORSCHE {`[${counts?.porcshe}]`} : {p ? <i className="fa-solid fa-check"></i> : ''}
                        </Link>
                        <Link to="#" className={`checkbox ${t ? 'checked' : ''}`} onClick={() => sett(prev => !prev)}>
                            TESLA {`[${counts?.tesla}]`} : {t ? <i className="fa-solid fa-check"></i> : ''}
                        </Link>
                        <Link to="#" className={`checkbox ${f ? 'checked' : ''}`} onClick={() => setF(prev => !prev)}>
                            FERRARI {`[${counts?.ferrari}]`} : {f ? <i className="fa-solid fa-check"></i> : ''}
                        </Link>
                        <Link to="#" className={`checkbox ${b ? 'checked' : ''}`} onClick={() => setB(prev => !prev)}>
                            BENTLEY {`[${counts?.bentley}]`} : {b ? <i className="fa-solid fa-check"></i> : ''}
                        </Link>
                    </div>
                </div>
                <div className="sort-container">
                    <Link to="#" className="sort-button" onClick={() => handleClick('s')}>
                        Sort By:
                    </Link>
                    <div className={`sort ${open ? 'opened' : ''}`}>
                        <Link to="#" className={`option ${s === 0 ? 'selected' : ''}`} onClick={() => setS(0)}>
                            Default
                        </Link>
                        <Link to="#" className={`option ${s === 1 ? 'selected' : ''}`} onClick={() => setS(1)}>
                            Expensive
                        </Link>
                        <Link to="#" className={`option ${s === 2 ? 'selected' : ''}`} onClick={() => setS(2)}>
                            Cheap
                        </Link>
                    </div>
                </div>
            </div>
            <div className="car-list">
                {loading ? <Loading /> : ''}
                {selectedData?.slice(page * 3, (selectedData.length - (page * 3 + 3) <= 0 ? selectedData.length : page * 3 + 3)).map((car) => {
                    return(
                        <CarCard car={car} key={car.id} />
                    );
                })}
            </div>
            <div className="pagination">
                <Pagination page={page} setPage={setPage} len={data ? data.length : 0} />
            </div>
        </section>
    );
}