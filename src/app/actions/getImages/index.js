import * as axios from 'axios';
import requests from 'services/api';

const getImages = (limit = 10, pageCount = 1, id = 1) => dispatch => axios({
  method: 'get',
  url: requests.getImages + `?limit=${limit}&page=${pageCount}&category_ids=${id}`,
  headers: {
    'Content-Type': 'application/json',
  }
})
.then(res => {
  if (res.status === 200) {
    dispatch({
      type: 'SET_IMAGES',
      payload: res.data
    });
    dispatch({
      type: 'SET_ID',
      payload: id
    });
  }
})
.catch(err => {
  // TODO: handle error with status code
})

export default getImages;
