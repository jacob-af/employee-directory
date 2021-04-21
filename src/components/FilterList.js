const FilterList = ({ array, filter }) => {
  return (
    <select onChange={e => filter(e.target.value)} className="dropdown">
      <option value="none">Filter Employees by Country</option>
      {array.map((item, index) => (
        <option value={item} key={index}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default FilterList;
