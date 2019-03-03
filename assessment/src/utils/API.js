import axios from "axios";
const BASEURL = "https://www.hatchways.io/api/assessment/students";

export default {
    search: function(query){
        return axios.get(BASEURL + query);
    }
};