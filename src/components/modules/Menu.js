import React, {Component} from 'react';
import MenuLink from './MenuLink';
import { connect } from 'react-redux'
import {CHANGE_MENU} from "../../types/app";
import '../../styles/menu.scss';

const Items = (props) => props.menu.map((item,k)=><MenuLink key={k} data={item} />);

class  Menu extends Component
{
    componentDidMount(){
        this.props.changeMenu(location.pathname);
    }

    render(){
        return (    
            <nav className="menu-nav">
                <ul className="menu">
                    <Items menu = {this.props.menu}/>
                </ul>
            </nav>
        )
    }
};


export default connect( 
    state => ({
        menu:state.menu
    }),
    dispatch => ({        
        changeMenu:(d)=>{
            dispatch({type:CHANGE_MENU, data:d});
        }
    })
)(Menu);