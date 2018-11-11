import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';

import './Pagination.scss';

const CustomPagination = (props) => {
  const { currentPage, totalResults, clicked } = props;

  const mq = window.matchMedia('(max-width: 480px)');

  return (
    <Pagination
      hideFirstLastPages={mq.matches}
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

CustomPagination.propTypes = {
  currentPage: PropTypes.number,
  totalResults: PropTypes.number,
  clicked: PropTypes.func,
};

export default CustomPagination;
