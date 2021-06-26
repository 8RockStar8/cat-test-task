import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import history from 'app/common/utils/history';

import {
  NotFoundBtn,
  NotFoundText,
  NotFoundImage,
  NotFoundContainer
} from './styled';

const NotFound = () => {
  const { id } = useSelector(state => state.categoryId);
  const dispatch = useDispatch();

  useEffect(_ => {
    dispatch({
      type: 'CLEAR_IMAGES',
    });
    dispatch({
      type: 'SET_ID',
      payload: id
    });
  }, []);

  const handleBack = () => {
    history.goBack();
  }

  return <NotFoundContainer>
    <NotFoundImage />
    <NotFoundText>Ooooops...</NotFoundText>
    <NotFoundBtn onClick={handleBack}>
      Go back
    </NotFoundBtn>
  </NotFoundContainer>;
};

export default NotFound;
