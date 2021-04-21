import API from "../utils/API";
import { useState, useEffect } from "react";
import PersonTable from "./PersonTable.js";

import Dropdown from "./Dropdown.js";

const PersonnelContainer = () => {
  const [personnel, setPersonnel] = useState({});
  const [sort, setSort] = useState("none");
  const [filterCountry, setFilterCountry] = useState("none");
  const [filterAge, setFilterAge] = useState("none");

  const sortOptions = [
    "First Name (ASC)",
    "First Name (DESC)",
    "Last Name (ASC)",
    "Last Name (DESC)",
    "Age (ASC)",
    "Age (DESC)"
  ];
  const countries = [
    "United States",
    "France",
    "Germany",
    "Denmark",
    "United Kingdom"
  ];
  const ages = ["21-35", "36-45", "46-55", "56-65", "66+"];

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
      case "First Name (ASC)":
        return (a, b) => (a.name.first > b.name.first ? 1 : -1);
      case "First Name (DESC)":
        return (a, b) => (a.name.first < b.name.first ? 1 : -1);
      case "Last Name (ASC)":
        return (a, b) => (a.name.last > b.name.last ? 1 : -1);
      case "Last Name (DESC)":
        return (a, b) => (a.name.last < b.name.last ? 1 : -1);
      case "Age (ASC)":
        return (a, b) => (a.dob.age > b.dob.age ? 1 : -1);
      case "Age (DESC)":
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
          <Dropdown callback={setSort} array={sortOptions}>
            Sort by:
          </Dropdown>
        </div>
        <div className="col-5">
          <Dropdown callback={setFilterCountry} array={countries}>
            Filter by Country
          </Dropdown>
        </div>
        <div className="col-4 dropdown">
          <Dropdown callback={setFilterAge} array={ages}>
            Filter by Age
          </Dropdown>
        </div>
      </div>
      <PersonTable
        bundle={{ filterByCountry, filterByAge, sortArray, personnel }}
      />
    </div>
  );
};

export default PersonnelContainer;
