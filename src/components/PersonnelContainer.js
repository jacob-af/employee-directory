import API from "../utils/API";
import { Component } from "react";
import Person from "./Person.js";
import SortList from "./SortList.js";
import FilterList from "./FilterList.js";

class PersonnelContainer extends Component {
  state = {
    result: {},
    display: {}
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.getPersonnel();
  }

  getPersonnel = () => {
    API.search()
      .then(res => {
        console.log(res.data.results);
        const results = res.data.results.map((result, index) => {
          result.index = index;
          return result;
        });
        this.setState({ result: results, display: results });
      })
      .catch(err => console.log(err));
  };

  sortArray = value => {
    let display;
    switch (value) {
      case "first":
        display = this.state.result.sort((a, b) =>
          a.name.first > b.name.first ? 1 : -1
        );
        this.setState({ display });
        break;
      case "last":
        display = this.state.result.sort((a, b) =>
          a.name.last > b.name.last ? 1 : -1
        );
        this.setState({ display });
        break;
      case "none":
        display = this.state.result.sort((a, b) =>
          a.index > b.index ? 1 : -1
        );
        this.setState({ display });
        break;
      default:
        display = this.state.result;
        this.setState({ display });
        break;
    }
  };

  filterArray = value => {
    let display;
    switch (value) {
      case "us":
        display = this.state.result.filter(
          result => result.location.country === "United States"
        );
        this.setState({ display });
        break;
      case "ne":
        display = this.state.result.filter(
          result => result.location.country === "Netherlands"
        );
        this.setState({ display });
        break;
      case "none":
        display = this.state.result.sort((a, b) =>
          a.index > b.index ? 1 : -1
        );
        this.setState({ display });
        break;
      default:
        display = this.state.result;
        this.setState({ display });
        break;
    }
  };

  render() {
    return (
      <div>
        <h1>here are some people</h1>
        <SortList sort={this.sortArray} />
        <FilterList filter={this.filterArray} />
        <table>
          <tbody>
            {this.state.result[0] ? (
              this.state.display.map((person, index) => (
                <Person key={index} person={person} />
              ))
            ) : (
              <tr>
                <td>{"Loading"}</td>
                <td>{"..."}</td>
                <td>{"..."}</td>
                <td>{"..."}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PersonnelContainer;
