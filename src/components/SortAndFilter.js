import Dropdown from "./Dropdown";

const SortAndFilter = ({
  bundle: {
    sort,
    countryFilter,
    ageFilter,
    setSort,
    changeCountryFilter,
    changeAgeFilter
  }
}) => {
  const sortOptions = [
    "First Name (ASC)",
    "First Name (DESC)",
    "Last Name (ASC)",
    "Last Name (DESC)",
    "Age (ASC)",
    "Age (DESC)",
    "City (ASC)",
    "City (DESC)"
  ];
  const countries = [
    "United States",
    "France",
    "Germany",
    "Denmark",
    "United Kingdom"
  ];
  const ages = ["21-35", "36-45", "46-55", "56-65", "66+"];
  return (
    <div className="row mb-2">
      <div className="col-3">
        <Dropdown callback={setSort} array={sortOptions}>
          {sort === "none" ? "Sort by:" : "(none)"}
        </Dropdown>
      </div>
      <div className="col-5">
        <Dropdown callback={changeCountryFilter} array={countries}>
          {countryFilter === "none" ? "Filter by Country" : "(none)"}
        </Dropdown>
      </div>
      <div className="col-4">
        <Dropdown callback={changeAgeFilter} array={ages}>
          {ageFilter === "none" ? "Filter by Age" : "(none)"}
        </Dropdown>
      </div>
    </div>
  );
};

export default SortAndFilter;
