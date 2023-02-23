import { getPagesArray, getTotalPagesCount } from "../../utils/pages";

import React from "react";

export default function PaginationComp({
  totalPages,
  currentPage,
  changePage,
}) {
  const pagesArray = getPagesArray(getTotalPagesCount(totalPages, 10));
  return (
    <div className="Pagination__Container">
      {pagesArray.map((page, i) => {
        return (
          <div
            className={
              page === currentPage
                ? "Page__Number__Container Page__Active"
                : "Page__Number__Container"
            }
            key={page}
            onClick={changePage}
          >
            {page}
          </div>
        );
      })}
    </div>
  );
}
