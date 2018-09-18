import React from 'react';
import '../../styles/photo.scss';
import {removeFavoriteAction, addFavoriteAction} from '../../actions/app';

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
    state => ({}),
    dispatch => ({        
        addFavorite:(k, d)=>{
            addFavoriteAction(dispatch, k, d)
        },
        removeFavorite:(k, d)=>{
            removeFavoriteAction(dispatch, k, d)
        }
    })
)(Photo);