import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { SIMGDIV, SIMG } from './../../styled';

const Random = () => {
  const [ pageImages, setPageimages ] = useState([]);

  const { images } = useSelector(state => state.imagesList);

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

export default Random;

