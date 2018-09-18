import {ADD_FAVORITE_PHOTO, REMOVE_FAVORITE_PHOTO} from "../types/app";

import {reactLocalStorage} from 'reactjs-localstorage';

const dataFavorites = reactLocalStorage.getObject('favorites');

const initialState = dataFavorites.byId ? dataFavorites : {
    byId:{},
    keys:[]
};

const addFavorite = (state, action)=>{

    let newState = {
        byId: {...state.byId, [action.data.id]: action.data},
        keys:state.keys.concat(action.data.id)
    }

    reactLocalStorage.setObject('favorites', newState);
    return newState;
}

const removeFavorite = (state, action)=>{

    delete state.byId[action.data];

    let newState =  { 
        byId:{...state.byId},
        keys:state.keys.filter((id)=> id !== action.data)
    }

    reactLocalStorage.setObject('favorites', newState);

    return newState;
}

export default function favorites(state = initialState, action)
{
    switch(action.type)
    {   
        case ADD_FAVORITE_PHOTO:                 
        return addFavorite(state, action);

        case REMOVE_FAVORITE_PHOTO: 
        return removeFavorite(state, action)
    }
    return state;
}