import * as axios from 'axios';
import requests from 'services/api';

const getCategories = () => dispatch => axios({
  method: 'get',
  url: requests.getCategories,
  headers: {
    'Content-Type': 'application/json',
  }
})
.then(res => {
  if (res.status === 200) {
    dispatch({
      type: 'SET_CATEGORIES',
      payload: res.data
    });
  }
})
.catch(err => {
  // TODO: handle error with status code
})

export default getCategories;
