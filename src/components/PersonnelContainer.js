import API from "../utils/API";
import { useState, useEffect } from "react";
import Person from "./Person.js";
import SortList from "./SortList.js";
import FilterListByCountry from "./FilterListByCountry.js";
import FilterListByAge from "./FilterListByAge.js";

const PersonnelContainer = () => {
  const [personnel, setPersonnel] = useState({});
  const [sort, setSort] = useState("none");
  const [filterCountry, setFilterCountry] = useState("none");
  const [filterAge, setFilterAge] = useState("none");

  useEffect(() => {
    API.search()
      .then(res => {
        console.log(res.data.results);
        const results = res.data.results.map((result, index) => {
          result.index = index;
          return result;
        });
        setPersonnel(results);
      })
      .catch(err => console.log(err));
  }, []);

  const sortArray = () => {
    switch (sort) {
      case "first":
        return (a, b) => (a.name.first > b.name.first ? 1 : -1);
      case "first-d":
        return (a, b) => (a.name.first < b.name.first ? 1 : -1);
      case "last":
        return (a, b) => (a.name.last > b.name.last ? 1 : -1);
      case "last-d":
        return (a, b) => (a.name.last < b.name.last ? 1 : -1);
      case "age":
        return (a, b) => (a.dob.age > b.dob.age ? 1 : -1);
      case "age-d":
        return (a, b) => (a.dob.age < b.dob.age ? 1 : -1);
      case "none":
      default:
        return (a, b) => (a.index > b.index ? 1 : -1);
    }
  };

  const filterByCountry = () => {
    if (filterCountry === "none") {
      return person => person;
    } else {
      return person => person.location.country === filterCountry;
    }
  };

  const filterByAge = () => {
    switch (filterAge) {
      case "21-35":
        return person => person.dob.age >= 21 && person.dob.age <= 35;
      case "36-45":
        return person => person.dob.age >= 36 && person.dob.age <= 45;
      case "46-55":
        return person => person.dob.age >= 46 && person.dob.age <= 55;
      case "56-65":
        return person => person.dob.age >= 56 && person.dob.age <= 65;
      case "66+":
        return person => person.dob.age >= 66;
      case "none":
      default:
        return person => person;
    }
  };

  return (
    <div className="container">
      <h1 className="text-center header">Employee Directory</h1>
      <p className="text-center">
        A randomly generated list of employees for you to sort and filter
      </p>
      <div className="row">
        <div className="col-3">
          <SortList sort={setSort} />
        </div>
        <div className="col-5">
          <FilterListByCountry filter={setFilterCountry} />
        </div>
        <div className="col-4 dropdown">
          <FilterListByAge filter={setFilterAge} />
        </div>
      </div>
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
    </div>
  );
};

export default PersonnelContainer;
