const axios = require("axios").default;


 const options = {
  method: 'GET',
  url: 'https://realty-mole-property-api.p.rapidapi.com/salePrice',
  params: {
    compCount: '5',
    squareFootage: '1600',
    bathrooms: '2',
    address: '520 Glenview, Ashland, OR',
    bedrooms: '4',
    propertyType: 'Single Family'
  },
  headers: {
    'x-rapidapi-key': '87e3032294msh25d302b42bf0260p193f23jsn25a17a3279f8',
    'x-rapidapi-host': 'realty-mole-property-api.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});