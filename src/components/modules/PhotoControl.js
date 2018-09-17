import React from 'react';
import Pagger from './Pagger';
import { connect } from 'react-redux';
import {CHANGE_MENU} from "../../types/app";
import '../../styles/photoControl.scss';

const PhotoControl = (props) => {

    return (    
        <div className="photo-control">
            <div className="control-element">
                <label>
                    Отображать:{' '}     
                    <select>
                        <option>15</option>
                        <option>20</option>
                        <option>25</option>
                        <option>50</option>
                    </select>
                </label>
            </div>
            <div className="control-element">
                <Pagger />
            </div>
        </div>
    )
};


export default connect( 
    state => ({
      
    }),
    dispatch => ({        
       changeMenu:(d)=>{
           dispatch({type:CHANGE_MENU, data:d});
       }
    })
)(PhotoControl);