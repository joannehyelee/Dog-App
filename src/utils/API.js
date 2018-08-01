// Axios makes promised based HTTP requests
import axios from "axios";

// Export object of methods using API
export default {

    // Gets images of random dogs (50 max)
    getRandom: function() {
        return axios.get("https://dog.ceo/api/breeds/image/random/50");
    },

    // Gets all breeds
    getAll: function() {
        return axios.get("https://dog.ceo/api/breeds/list/all");
    },

    // Gets images of chosen breed
    getByBreed: function(breed) {
        return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
    },

    // Gets images of chosen sub-breed
    getBySubBreed: function(breed, subBreed) {
        return axios.get("https://dog.ceo/api/breed/" + breed + "/" + subBreed + "/images");
    }

};