import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import actions from 'app/actions';

import { SLMDiv, SLMBtn } from './styled';

const LoadMoreBtn = () => {
  const [ limit, setLimit ] = useState(10);
  const [ pageCount, setPageCount ] = useState(1);

  const { id } = useSelector(state => state.categoryId);

  const dispatch = useDispatch();

  useEffect(_ => {
    if (pageCount > 1) {
      dispatch(actions.getImages(limit, pageCount, id));
    }
  }, [pageCount]);

  useEffect(_ => {
    setLimit(10);
  }, [id]);

  return <SLMDiv>
    <SLMBtn onClick={_ => setPageCount(prevState => prevState + 1)}>Load More</SLMBtn>
  </SLMDiv>
}

export default LoadMoreBtn;
