import React from 'react';
import '../../styles/photo.scss';
import {ADD_FAVORITE_PHOTO, CHANGE_PHOTO_STATUS, REMOVE_FAVORITE_PHOTO} from "../../types/app";
import { connect } from 'react-redux';

const Photo = (props) => {

    let upStatus = () =>{
        if(props.data.liked_by_user){
            props.removeFavorite(props.pkey, props.data.id);
        }else{
            props.addFavorite(props.pkey, props.data);
        }
    }

    return (    
        <div className="photo">
            {props.checkbox ?
                <div onClick={upStatus} className="photo-checkbox">
                    {props.data.liked_by_user ? <span></span> : ''}
                </div>
            :''}
            <img src={props.data.urls.small} />
        </div>
    )
};

export default connect( 
    state => ({
      
    }),
    dispatch => ({        
        addFavorite:(k, d)=>{
           dispatch({type:CHANGE_PHOTO_STATUS, data:k});
           dispatch({type:ADD_FAVORITE_PHOTO, data:d});
        },
        removeFavorite:(k, d)=>{
            dispatch({type:CHANGE_PHOTO_STATUS, data:k});
            dispatch({type:REMOVE_FAVORITE_PHOTO, data:d});
        }
    })
)(Photo);