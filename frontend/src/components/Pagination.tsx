type Props = {
    activePage: number,
    totalPages: number,
    onPageChange: (page: number) => void,
};

export default function Pagination(props: Props) {
    // make sure that the activePage number is within the accepted parameters (between page 1 to totalPages) before making any updates
    function testPageParams(page: number){
        if(page > 0 && page <= props.totalPages){
            props.onPageChange(page);
        }
    }

    return (
        <nav aria-label="Pagination" className="flex flex-col items-center mt-4 mb-4">
            <ul className="pagination join-horizontal join join-item">
                <li>
                    <button aria-label="First page" className="join-item btn" onClick={() => testPageParams(1)}>First</button>
                </li>
                <li>
                    <button aria-label="Previous page" className="join-item btn" onClick={() => testPageParams(props.activePage - 1)}>Previous</button>
                </li>
                {/* <li>...</li> */}
                <li>
                    <button aria-current="page" className="join-item btn btn-active">{`${props.activePage} / ${props.totalPages}`}</button>
                </li>
                {/* <li>...</li> */}
                <li>
                    <button aria-label="Next page" className="join-item btn" onClick={() => testPageParams(props.activePage + 1)}>Next</button>
                </li>
                <li>
                    <button aria-label="Last page" className="join-item btn" onClick={() => testPageParams(props.totalPages)}>Last</button>
                </li>
            </ul>
        </nav>
    );
}