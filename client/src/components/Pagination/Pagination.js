import React from 'react';
import './Pagination.css'

const Pagination = ({staffPerPage, listLength, paginate, currentPage, search}) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(listLength / staffPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className={search ? 'pagination disabled' : 'pagination'}>
            <ul className='pagination__buttons'>
                {
                    pageNumbers.map(number => (
                        <li className={number === currentPage ?'pagination__buttons__item active' : 'pagination__buttons__item'} key = {number} onClick={() => paginate(number)}>
                            <span>
                                {number}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Pagination;