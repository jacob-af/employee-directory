const FilterListByAge = props => {
  const ages = ["21-35", "36-45", "46-55", "56-65", "66+"];

  return (
    <select onChange={e => props.filter(e.target.value)} className="dropdown">
      <option value="none">Filter Employees by Age</option>
      {ages.map((age, index) => (
        <option value={age} key={index}>
          {age}
        </option>
      ))}
    </select>
  );
};

export default FilterListByAge;
