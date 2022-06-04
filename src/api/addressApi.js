import axios from "axios";

//load all countries
export async function getCountries() {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(Error(err));
      });
  });
}

//search for address suggestions with the given search term
export async function getAddress(searchTerm, country) {
  return new Promise((resolve, reject) => {
    var config = {
      method: "get",
      url: `https://api.geoapify.com/v1/geocode/autocomplete?text=%${searchTerm} ,${country}&apiKey=c00142e34f224e9a9c180b833478d3f5`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(Error(error));
      });
  });
}
