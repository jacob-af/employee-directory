import Person from "./Person.js";

const PersonTable = ({
  bundle: { formatPersonnel, currentPage, recordsPerPage, searchTerm }
}) => {
  return (
    <div className="row">
      <table className="table table-bordered table-dark table-hover table-striped">
        <thead>
          <tr>
            <td></td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
            <td>City</td>
            <td>Country</td>
            <td>Number</td>
          </tr>
        </thead>
        <tbody>
          {formatPersonnel()[0] ? (
            formatPersonnel()
              .slice(
                recordsPerPage * (currentPage - 1),
                recordsPerPage * currentPage
              )
              .map(person => <Person key={person.index} person={person} />)
          ) : searchTerm === "" ? (
            <tr>
              <td>{"..."}</td>
              <td>{"Loading"}</td>
              <td>{"..."}</td>
              <td>{"Loading"}</td>
              <td>{"..."}</td>
              <td>{"Loading"}</td>
              <td>{"..."}</td>
            </tr>
          ) : (
            <tr>
              <td>{"*"}</td>
              <td>{"No Matching Names"}</td>
              <td>{"*"}</td>
              <td>{"*"}</td>
              <td>{"*"}</td>
              <td>{"*"}</td>
              <td>{"*"}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PersonTable;
