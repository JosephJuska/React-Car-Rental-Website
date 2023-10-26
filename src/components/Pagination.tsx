import { Link } from "react-router-dom";
import '../style/Pagination.css';

type PaginationType = {
    page: number,
    setPage: any,
    len: number
}
export function Pagination({page, setPage, len}: PaginationType) {
    const pageCount = Math.ceil(len / 3);
    const sectionCount = Math.ceil(pageCount / 5);
    const section = page % 5 !== 0 ? Math.max(Math.ceil(page / 5), 1) : page / 5 + 1;

    const handleClickArrows = (num: number) => {
        setPage((prev: number) => Math.max(0, prev + num));
        window.scrollTo(0, 0);
    }

    const handleClickNumbers = (num: number) => {
        setPage(num);
        window.scrollTo(0, 0);
    }

    const displayPages = (section: number) => {
        let p = (section - 1) * 5;
        let pArray = [];
        for(let i = 0; i < 5; i++){
            if(p >= pageCount){
                break;
            }

            pArray.push(p);
            p++;
        }

        return(
            pArray.map((num: number) => {
                return(
                <Link to="#" className={`page-num ${num === page ? 'pactive' : ''}`} key={num * 20} onClick={() => handleClickNumbers(num)}>
                    {num + 1}
                </Link>
                )
            })
        );
    }

    return(
        <div className="page-container">
            <i className="fa-solid fa-angles-left" onClick={() => handleClickArrows(-1)}></i>
            {displayPages(section)}
            {(page % 5 !== 0 ? Math.max(Math.ceil(page / 5), 1) : page / 5 + 1) < sectionCount ? <i className="fa-solid fa-angles-right" onClick={() => handleClickArrows(1)}></i> : ''}
        </div>
    );
}