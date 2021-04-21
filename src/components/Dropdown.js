const Dropdown = ({ array, callback, children }) => {
  return (
    <select onChange={e => callback(e.target.value)} className="dropdown">
      <option value="none">{children}</option>
      {array.map((item, index) => (
        <option value={item} key={index}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
