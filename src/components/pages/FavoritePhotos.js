import React, {Component} from 'react';
import Photo from '../modules/Photo';
import Masonry from 'react-masonry-component';
import { connect } from 'react-redux'
import '../../styles/favoritePhotos.scss';

const Items = (props) => props.photos.map((item,k)=><Photo key={k} data={item} />);

class FavoritePhotos extends Component 
{
    
    render()
    {
        return (
            <div className="photos">
                <div className="foto-container">
                    <Masonry>
                        {this.props.photos.keys.map((k)=>{return <Photo key={k} data={this.props.photos.byId[k]} />})}
					</Masonry>
                </div>
            </div>
        )
    }
}

export default connect( 
    state => ({
        photos:state.favorites,
    }),
    dispatch => ({   
    })
)(FavoritePhotos);
