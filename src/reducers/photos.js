import {SET_PHOTOS, CHANGE_PHOTO_STATUS} from "../types/app";
import {loadState} from '../localStorage.js';
const dataState = loadState();
const favorites = dataState ? dataState.favorites : { byId:{}};

export default function photos(state = [], action)
{
    switch(action.type)
    {
        case SET_PHOTOS: 

        return [   
            ...state, 
            ...action.data.map((photo)=>{
                if(favorites.byId[photo.id]){
                    return {...photo, liked_by_user:true}
                }
                return photo;
            })
        ]

        case CHANGE_PHOTO_STATUS: 
            state[action.data] = {
                ...state[action.data], liked_by_user: !state[action.data]['liked_by_user']
            }
        return [...state];
    }
    return state;
}