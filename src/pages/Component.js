import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';

import actions from 'app/actions';

import Sections from 'sections';
import NotFound from './components/notFound';

const Pages = () => {
  const [ categorieIds, setCategorieIds ] = useState([1, 2, 4, 5, 7, 14, 15]);

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(_ => {
    if (location.pathname === '/') {
      dispatch(actions.getImages(10, 1, categorieIds[ Math.floor( Math.random() * categorieIds.length ) ]));
    }
    dispatch(actions.getCategories());
  }, []);

  return <div>
    <Switch>
      <Route exact path={[
        '/',
        '/boxes',
        '/clothes',
        '/hats',
        '/sinks',
        '/space',
        '/sunglasses',
        '/ties',
      ]}>
        <Sections />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </div>;
}

export default Pages;
