import API from "../utils/API";
import { useState, useEffect } from "react";
import Header from "./Header.js";
import PersonTable from "./PersonTable.js";
import Pagination from "./Pagination.js";
import SearchForm from "./SearchForm.js";
import SortAndFilter from "./SortAndFilter";

const PersonnelContainer = () => {
  const [personnel, setPersonnel] = useState([]);
  const [sort, setSort] = useState("none");
  const [searchTerm, setSearchTerm] = useState("");
  const [countryFilter, setCountryFilter] = useState("none");
  const [ageFilter, setAgeFilter] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

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

  const sortPersonnel = () => {
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
      case "City (ASC)":
        return (a, b) => (a.location.city > b.location.city ? 1 : -1);
      case "City (DESC)":
        return (a, b) => (a.location.city < b.location.city ? 1 : -1);
      case "none":
      default:
        return (a, b) => (a.index > b.index ? 1 : -1);
    }
  };

  const changeCountryFilter = value => {
    setCountryFilter(value);
    setCurrentPage(1);
  };

  const changeAgeFilter = value => {
    setAgeFilter(value);
    setCurrentPage(1);
  };

  const filterByCountry = () => {
    if (countryFilter === "none") {
      return person => person;
    } else {
      return person => person.location.country === countryFilter;
    }
  };

  const filterByAge = () => {
    switch (ageFilter) {
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

  const filterByName = () => {
    if (searchTerm !== "") {
      //return either first or last names that include current search string
      return person =>
        person.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.name.last.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return person => person;
    }
  };

  const handleInputChange = event => {
    setSearchTerm(event.target.value.trim());
    setCurrentPage(1);
  };

  const formatPersonnel = () =>
    personnel
      .filter(filterByName())
      .filter(filterByCountry())
      .filter(filterByAge())
      .sort(sortPersonnel());

  const changePage = event => {
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      if (currentPage < formatPersonnel().length / recordsPerPage) {
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
      <Header />
      <SearchForm search={searchTerm} handleInputChange={handleInputChange} />
      <SortAndFilter
        bundle={{
          sort,
          countryFilter,
          ageFilter,
          setSort,
          changeCountryFilter,
          changeAgeFilter
        }}
      />

      <Pagination
        bundle={{
          changePage,
          changeNumberOfRecords,
          currentPage,
          recordsPerPage,
          formatPersonnel
        }}
      />

      <PersonTable
        bundle={{ currentPage, recordsPerPage, formatPersonnel, searchTerm }}
      />
    </div>
  );
};

export default PersonnelContainer;
