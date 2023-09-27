import React from 'react';
import {BiChevronRight , BiChevronLeft} from 'react-icons/bi'

function Pagination({ currentPage, totalPages, onPrevPage, onNextPage , setItemsPerPage   }) {

  const itemsPerPage = 10;

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPrevPage();
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onNextPage();
    }
  };

  const handleItemsPerPage = (e) => {
    const value = e.target.value
    setItemsPerPage(value)
  }

  return (
    <div className="pagination">
      <span>Items Per Page</span>
      <input type="number"  className='itemsPerPage' defaultValue={10} onChange={handleItemsPerPage}/>
      <span className="page-info">
        Page {currentPage} of {totalPages}
      </span>
      {currentPage === 1 ? <BiChevronLeft className='disabledClick' /> : <BiChevronLeft onClick={handlePrevClick} /> }
      {currentPage === totalPages ? <BiChevronRight className='disabledClick'  /> : <BiChevronRight onClick={handleNextClick} /> }

    </div>
  );
}

export default Pagination;
