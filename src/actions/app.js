import {SET_PHOTOS, 
        CHANGE_LOADED, 
        CHANGE_PAGE, 
        CHANGE_MENU, 
        ADD_FAVORITE_PHOTO, 
        CHANGE_PHOTO_STATUS, 
        REMOVE_FAVORITE_PHOTO} 
from "../types/app";

import setting from "../system/setting.json";

export function getPhotosAction(dispatch, page = 1) 
{
    dispatch({type:CHANGE_LOADED});

    fetch(setting.url+'&&page=' + page + '&&per_page=' + 50)
        .then((res)=>{
            return res.json();
        }).then((d)=>{
            dispatch({type:SET_PHOTOS, data:d})
            dispatch({type:CHANGE_PAGE})
            setTimeout(()=>{
                dispatch({type:CHANGE_LOADED});
            },500);
        });
}

export function changeMenuAction(dispatch, d) 
{
    dispatch({type:CHANGE_MENU, data:d});
}

export function addFavoriteAction(dispatch, k, d) 
{
    dispatch({type:CHANGE_PHOTO_STATUS, data:k});
    dispatch({type:ADD_FAVORITE_PHOTO, data:d});
}

export function removeFavoriteAction(dispatch, k, d) 
{
    dispatch({type:CHANGE_PHOTO_STATUS, data:k});
    dispatch({type:REMOVE_FAVORITE_PHOTO, data:d});
}