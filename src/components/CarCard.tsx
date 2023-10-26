import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import '../style/CarCard.css';
export function CarCard(props: any) {
    const navigate = useNavigate();
    const style = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('${props.car.img}')`
    }

    const handleClick = () => {
        window.scrollTo(0, 0);
        navigate(`../car/${props.car.id}`)
    };

    return(
        <div style={style} className="car-card" key={props.car.id * 1000} onClick={() => handleClick()}>
            <div>
                <p>
                    {props.car.name}
                </p>
                <p>
                    <span>{props.car.expense} $</span> / week
                </p>
            </div>
            <LazyLoadImage src={`/src/assets/brands/${props.car.brand}.png`} alt={`${props.car.brand} Logo`} />
        </div>
    );
}