import React from 'react';
import './Pagination.scss';

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <section className="pagination">
            <ul className="pages">
                <li>Prev</li>
                {pageNumbers.map(number => (
                    <li onClick={() => paginate(number)}>
                        {number}
                    </li>
                ))}
                <li>Next</li>
            </ul>
        </section>
    );
};

export default Pagination;