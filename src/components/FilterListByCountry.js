const countries = [
  "United States",
  "France",
  "Germany",
  "Denmark",
  "United Kingdom"
];

const FilterListByCountry = props => {
  return (
    <select onChange={e => props.filter(e.target.value)} className="dropdown">
      <option value="none">Filter Employees by Country</option>
      {countries.map((country, index) => (
        <option value={country} key={index}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default FilterListByCountry;
