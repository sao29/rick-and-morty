import React from "react";

const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const lastPage = () => {
    onPrevious();
  };

  const nextPage = () => {
    onNext();
  };
  return (
    <na>
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button onClick={lastPage} className="page-link">
              Previous
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <button onClick={nextPage} className="page-link">
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </na>
  );
};

export default Pagination;
