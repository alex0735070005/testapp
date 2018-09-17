import {CHANGE_MENU} from "../types/app"
import dataMenu from '../system/menu.json';

export default function menu(state = dataMenu, action)
{
    switch(action.type)
    {
        case CHANGE_MENU: 

        return [
            ...state.map((el)=>{
                if(el.link === action.data)
                {
                    return {...el, active:true};
                }
                return {...el, active:false};
                })
            ]
    }
    return state;
}