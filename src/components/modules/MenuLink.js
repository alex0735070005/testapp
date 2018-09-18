import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import {changeMenuAction} from '../../actions/app';

const MenuLink = (props) => {

    let change = ()=>{
        props.changeMenu(props.data.link);
    }

    return (    
        <li onClick={change} ><Link className={props.data.active ? 'active':''} to={props.data.link} >{props.data.name}</Link></li>
    )
};


export default connect( 
    state => ({}),
    dispatch => ({        
        changeMenu:(d)=>{
            changeMenuAction(dispatch, d);
        }
    })
)(MenuLink);