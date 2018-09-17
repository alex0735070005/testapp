import React, {Component} from 'react';
import Photo from '../modules/Photo';
import Masonry from 'react-masonry-component';
import { connect } from 'react-redux'
import {getPhotosAction} from '../../actions/app';
import '../../styles/photos.scss';

class Photos extends Component 
{
    componentDidMount()
    {
        
        if(this.props.photos.length === 0)
        {
            this.props.getPhotos(1);
            this.onScroll();
        }
    }

    onScroll = () =>
    {
        window.onscroll = () => 
        {
            if(location.pathname === '/dashboard/photos'){
                var scrolled = window.pageYOffset || document.documentElement.scrollTop;
            
                var scrollHeight = document.documentElement.scrollHeight;
                var innerHeight  = window.innerHeight;
                var resultScrolled = innerHeight + scrolled + 400;
        
                if((resultScrolled >= scrollHeight) && !this.props.loaded){
                    this.props.getPhotos(this.props.page);
                }
            }
        }
    }

    render()
    {
        return (
            <div className="photos">
                <div className="foto-container">
                    <Masonry>
                        {this.props.photos.map((item,k)=>{return <Photo checkbox={true} key={k} pkey={k} data={item} />})}
					</Masonry>
                </div>
            </div>
        )
    }
}

export default connect( 
    state => ({
        photos:state.photos,
        page:state.app.page,
        loaded:state.app.loaded
    }),
    dispatch => ({        
        getPhotos: (page)=>{
            getPhotosAction(dispatch, page);
        }
    })
)(Photos);
