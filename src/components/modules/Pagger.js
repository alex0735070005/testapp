import React from 'react';
import { connect } from 'react-redux';
import {CHANGE_MENU} from "../../types/app";

const Pagger = (props) => {

    return (    
   
        <div className="pagger">
            <span>Prev</span>
            <span className="p-active">1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>Next</span>
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
)(Pagger);