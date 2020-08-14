import React from 'react';
import './Button.css';

class Button extends React.Component{
    constructor(props){
        super(props);

        // Shaden: These should not be state -> should be proptypes
       /* this.state = {
            name: '',
            widthSquares: '',
            textColor: '',
            backgroundColor: ''
        };
        */

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.onClick(this.props.name);
    }

    render(){
        return (
            <div className='button-container' style={{flexGrow: this.props.widthSquares}}>
                <button className='button' onClick={this.handleClick} style={{backgroundColor: this.props.backgroundColor,
                                                    color: this.props.textColor}}>{this.props.name}</button>
            </div>
        );
    }

}

export default Button;