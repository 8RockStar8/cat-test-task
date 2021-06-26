import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ContentContainer } from './styled';

const Ties = lazy(_ => import('./components/ties'));
const Hats = lazy(_ => import('./components/hats'));
const Sinks = lazy(_ => import('./components/sinks'));
const Space = lazy(_ => import('./components/space'));
const Boxes = lazy(_ => import('./components/boxes'));
const Random = lazy(_ => import('./components/random'));
const Clothes = lazy(_ => import('./components/clothes'));
const Sunglasses = lazy(_ => import('./components/sunglasses'));
const LoadMoreBtn = lazy(_ => import('components/loadMoreButton'));

const Content = () => {
  return <ContentContainer>
      <Suspense fallback={
        <Loader
          type='BallTriangle'
          color='#00BFFF'
          height={75}
          width={75}
          timeout={-1}
          style={{position: 'fixed', left: '50%', top: '50%'}}
        />
      }>
      <Switch>
        <Route exact path='/'>
          <Random />
        </Route>
        <Route exact path='/boxes'>
          <Boxes />
        </Route>
        <Route exact path='/clothes'>
          <Clothes />
        </Route>
        <Route exact path='/hats'>
          <Hats />
        </Route>
        <Route exact path='/sinks'>
          <Sinks />
        </Route>
        <Route exact path='/space'>
          <Space />
        </Route>
        <Route exact path='/sunglasses'>
          <Sunglasses />
        </Route>
        <Route exact path='/ties'>
          <Ties />
        </Route>
      </Switch>
      <LoadMoreBtn />
    </Suspense>
  </ContentContainer>;
} 

export default Content;
