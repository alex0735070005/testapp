import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Photos from './components/pages/Photos';
import FavoritePhotos from './components/pages/FavoritePhotos';

export default () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/dashboard/photos'  component={Photos} />
        <Route path='/dashboard/photos/favorite' component={FavoritePhotos}/>
    </Switch>
);