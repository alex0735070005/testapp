import {ADD_FAVORITE_PHOTO, REMOVE_FAVORITE_PHOTO} from "../types/app";
import {loadState} from '../localStorage.js';
const dataState = loadState();
const initialState = dataState ? dataState.favorites : {
    byId:{},
    keys:[]
};

export default function favorites(state = initialState, action)
{
    switch(action.type)
    {   
        case ADD_FAVORITE_PHOTO: 
                
        return {
            byId: {...state.byId, [action.data.id]: action.data},
            keys:state.keys.concat(action.data.id)
        };

        case REMOVE_FAVORITE_PHOTO: 
            delete state.byId[action.data];
        return { 
            byId:{...state.byId},
            keys:state.keys.filter((id)=> id !== action.data)
        }
    }
    return state;
}