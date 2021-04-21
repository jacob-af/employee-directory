function SearchForm(props) {
  return (
    <div className="row justify-content-center">
      <div className="col-3">
        <p className="text-center">Search by Name:</p>
      </div>
      <div className="col-3">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          placeholder="Type in a name"
          id="term"
        />
      </div>
    </div>
  );
}

export default SearchForm;
