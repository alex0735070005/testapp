import {SET_PHOTOS, CHANGE_LOADED, CHANGE_PAGE} from "../types/app";

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