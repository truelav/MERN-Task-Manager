export const getTotalPagesCount = (totalCount, limitPerPage) => {
  return Math.ceil(totalCount / limitPerPage);
};

export const getPagesArray = (totalPages) => {
  const result = [];
  for (let i = 1; i <= totalPages; i++) {
    result.push(i);
  }
  return result;
};

export const paginatedItems = [
  [0, 9],
  [10, 19],
  [20, 29],
];
