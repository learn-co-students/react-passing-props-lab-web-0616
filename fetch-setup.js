require('whatwg-fetch');
const fetchMock = require('fetch-mock');
const { getFruitTypes, getFruitBasket } = require('./fruit');

fetchMock.get('/api/fruit', getFruitBasket());
fetchMock.get('/api/fruit_types', getFruitTypes());

module.exports = fetchMock;
