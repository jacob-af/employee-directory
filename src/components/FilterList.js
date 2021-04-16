const FilterList = props => {
  return (
    <select onChange={e => props.filter(e.target.value)}>
      <option value="none">Filter Employees</option>
      <option value="us">USA</option>
      <option value="ne">Netherlands</option>
    </select>
  );
};

export default FilterList;
