const SortList = props => {
  return (
    <select onChange={e => props.sort(e.target.value)}>
      <option value="none">Sort List</option>
      <option value="first">First Name</option>
      <option value="last">Last Name</option>
    </select>
  );
};

export default SortList;
