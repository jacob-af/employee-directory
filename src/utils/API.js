import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=500&nat=us,gb,dk,de,fr";

const API = {
  search: function () {
    return axios.get(BASEURL);
  }
};

export default API;
