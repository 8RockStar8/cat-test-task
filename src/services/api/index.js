const BASE_URL = 'https://api.thecatapi.com';
const API_V1 = '/v1';

const getCategories = BASE_URL + API_V1 + '/categories';
const getImages = BASE_URL + API_V1 + '/images/search';

const requests = {
  getImages,
  getCategories
}

export default requests;
