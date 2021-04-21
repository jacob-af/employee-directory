import Dropdown from "./Dropdown.js";

const Pagination = ({
  bundle: {
    changePage,
    changeNumberOfRecords,
    currentPage,
    recordsPerPage,
    formatPersonnel
  }
}) => {
  const personnel = formatPersonnel();
  return (
    <div className="row">
      <div className="col-2">
        <button
          style={{
            opacity: currentPage > 1 ? 1 : 0.4
          }}
          onClick={changePage}
          className="card-btn"
          data-value="back"
        >{`<--Back`}</button>
      </div>
      <div className="col-6">
        <p className="text-center">
          Page {currentPage} of {Math.ceil(personnel.length / recordsPerPage)}
        </p>
      </div>
      <div className="col-2">
        <Dropdown callback={changeNumberOfRecords} array={[15, 20, 25, 50]}>
          10
        </Dropdown>
      </div>
      <div className="col-2">
        <button
          style={{
            opacity: currentPage < personnel.length / recordsPerPage ? 1 : 0.4
          }}
          onClick={changePage}
          className="card-btn"
          data-value="next"
        >
          {`Next-->`}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
