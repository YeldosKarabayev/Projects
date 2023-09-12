import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePreviousClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div>
      <button onClick={handlePreviousClick} disabled={currentPage === 1}>
        Назад
      </button>
      <span>Страница {currentPage} из {totalPages}</span>
      <button onClick={handleNextClick} disabled={currentPage === totalPages}>
        Вперед
      </button>
    </div>
  );
};

export default Pagination;