import React from 'react';
import { withRouter } from  'react-router-dom';
//A higher up component: it's a function that takes the component as an argument and returns a modified component
//it's used to prevent prop drilling:-passing the props through different component whose goal
//is to just pass the props to their child component untill we reach the target.
import './menuItem.styles.scss';
const MenuItem = ({title,imageUrl,size,history,linkUrl,match}) => (
    <div className={`${size} menu-item`} onClick = {() => history.push(`${match.url}${linkUrl}` )   }>
    <div className='backgrond-image' style={{
        backgroundImage: `url(${imageUrl})` 
    }}/>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="title">Shop Now</span>
        </div>
    </div>
);
export default  withRouter(MenuItem);