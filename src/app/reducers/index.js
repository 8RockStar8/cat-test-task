import { combineReducers } from 'redux';

import imagesList from './images';
import categoryId from './categoryId';
import categoriesList from './categoriesList';

export default combineReducers({
  imagesList,
  categoryId,
  categoriesList
});
