import Person from "./Person.js";

const PersonTable = ({
  bundle: { filterByCountry, filterByAge, sortArray, personnel }
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
          </tr>
        </thead>
        <tbody>
          {personnel[0] ? (
            personnel
              .filter(filterByCountry())
              .filter(filterByAge())
              .sort(sortArray())
              .map(person => <Person key={person.index} person={person} />)
          ) : (
            <tr>
              <td>{"Loading"}</td>
              <td>{"..."}</td>
              <td>{"..."}</td>
              <td>{"..."}</td>
              <td>{"..."}</td>
              <td>{"..."}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PersonTable;
