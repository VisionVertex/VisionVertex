import React, { FC } from 'react';

interface LoadMoreButtonProps {
  currentPage: number;
  totalPages: number;
  onLoadMore: () => void;
}

const LoadMore: FC<LoadMoreButtonProps> = ({ currentPage, totalPages, onLoadMore }) => {
  const showLoadMore = currentPage < totalPages;

  return showLoadMore ? (
    <div className="d-flex justify-content-center">
    <button className="btn bg-primary text-light d-flex align-items-center gap-1" onClick={onLoadMore}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        fill="currentColor"
        className="bi bi-arrow-clockwise  "
        viewBox="0 0 16 16"
      >
        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
      </svg>
      <span style={{marginTop:'.2rem'}} > Load More</span>
    </button>
  </div>
  
  ) : null;
};

export default LoadMore;
