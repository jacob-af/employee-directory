const SortList = props => {
  return (
    <select onChange={e => props.sort(e.target.value)}>
      <option value="none">Sort List</option>
      <option value="first">First Name (ASC)</option>
      <option value="first-d">First Name (DESC)</option>
      <option value="last">Last Name (ASC)</option>
      <option value="last-d">Last Name (DESC)</option>
      <option value="age">Age (ASC)</option>
      <option value="age-d">Age (DESC)</option>
    </select>
  );
};

export default SortList;
