import React from 'react';
import Pagination from 'react-js-pagination';

import './Pagination.scss';

const CustomPagination = (props) => {
  const { currentPage, totalResults, clicked } = props;

  return (
    <Pagination
      prevPageText="Prev"
      nextPageText="Next"
      firstPageText="First"
      lastPageText="Last"
      itemClass="pagination__item"
      itemClassFirst="first"
      itemClassLast="last"
      itemClassPrev="prev"
      itemClassNext="next"
      activePage={currentPage}
      itemsCountPerPage={20}
      totalItemsCount={totalResults}
      pageRangeDisplayed={4}
      onChange={clicked}
    />
  );
};

export default CustomPagination;
