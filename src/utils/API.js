import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=100&nat=us,gb,dk,de,fr";

const API = {
  search: function () {
    return axios.get(BASEURL);
  }
};

export default API;
