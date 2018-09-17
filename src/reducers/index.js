import {combineReducers} from 'redux';

import app from "./app";
import menu from "./menu";
import photos from "./photos";
import favorites from "./favorites";

export default combineReducers({
    app,
    menu,
    photos,
    favorites
});