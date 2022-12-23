import './Pagination.scss';

const Pagination = ({currentPage, limitPage, previousPage, nextPage}) => {
    return (
        <div className="pagination">
            <span className="block-paginate" onClick={previousPage}>Précédent</span>
            <span className="indicate-paginate">{currentPage}/{limitPage}</span>
            <span className="block-paginate" onClick={nextPage}>Suivant</span>
        </div>
    )
}

export default Pagination;