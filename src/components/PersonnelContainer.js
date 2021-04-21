import API from "../utils/API";
import { useState, useEffect } from "react";
import PersonTable from "./PersonTable.js";

import Dropdown from "./Dropdown.js";
import Pagination from "./Pagination.js";

const PersonnelContainer = () => {
  const [personnel, setPersonnel] = useState([]);
  const [sort, setSort] = useState("none");
  const [filterCountry, setFilterCountry] = useState("none");
  const [filterAge, setFilterAge] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

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

  const formatPersonnel = () =>
    personnel.filter(filterByCountry()).filter(filterByAge()).sort(sortArray());

  const changePage = event => {
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      if (currentPage < personnel.length / recordsPerPage) {
        setCurrentPage(currentPage + 1);
      }
    } else {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  const changeNumberOfRecords = value => {
    if (value === "none") {
      setRecordsPerPage(10);
    } else {
      setRecordsPerPage(value);
    }
    setCurrentPage(1);
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

      <Pagination
        bundle={{
          changePage,
          changeNumberOfRecords,
          currentPage,
          recordsPerPage,
          formatPersonnel
        }}
      />

      <PersonTable bundle={{ currentPage, recordsPerPage, formatPersonnel }} />
    </div>
  );
};

export default PersonnelContainer;
