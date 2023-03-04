import { getPagesArray, getTotalPagesCount } from "../../utils/pages";

export default function PaginationComp({
  totalPages,
  currentPage,
  changePage,
}) {
  const pagesArray = getPagesArray(getTotalPagesCount(totalPages, 10));

  const handleChangePage = () => {};

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
            onClick={() => changePage(page)}
          >
            {page}
          </div>
        );
      })}
    </div>
  );
}
