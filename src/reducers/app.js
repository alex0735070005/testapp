import {CHANGE_LOADED, CHANGE_PAGE} from "../types/app"


const initState = {   
    page:1,
    loaded:false
}

export default function app(state = initState, action)
{
    switch(action.type)
    {
        
        case CHANGE_LOADED: 

        return {
            ...state,
            loaded:!state.loaded
        }

        case CHANGE_PAGE: 

        return {
            ...state,
            page:state.page + 1
        }
    }
    return state;
}