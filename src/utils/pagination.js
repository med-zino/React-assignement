export function nextPage(currentPage, totalPages) {
    return currentPage < totalPages ? currentPage + 1 : currentPage;
  }
  
  export function prevPage(currentPage) {
    return currentPage > 1 ? currentPage - 1 : currentPage;
  }