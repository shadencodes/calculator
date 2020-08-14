import React from 'react';
import './Display.css';

class Display extends React.Component{
    // Shaden: add proptypes

    render(){
        return (
            <div className="display-container">
                <div className="text">{this.props.value}</div>
            </div>
        );
    }
}

export default Display;