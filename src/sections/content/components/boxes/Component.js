import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import actions from 'app/actions';

import { SIMGDIV, SIMG } from './../../styled';

const Boxes = () => {
  const [ pageImages, setPageimages ] = useState([]);

  const { id } = useSelector(state => state.categoryId);
  const { images } = useSelector(state => state.imagesList);

  const dispatch = useDispatch();

  useEffect(_ => {
    dispatch(actions.getImages(10, 1, id));
  }, []);

  useEffect(_ => {
    images && setPageimages(images);
  }, [ images ]);

  return <>
    {pageImages && pageImages.length && pageImages.map((item, index) => {
      return <SIMGDIV key={`images_${index}`}>
        <SIMG src={item.url} alt='' />
      </SIMGDIV>;
    })}
  </>;
};

export default Boxes;
