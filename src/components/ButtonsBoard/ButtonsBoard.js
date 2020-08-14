import React from 'react';
import './ButtonsBoard.css';
import Button from '../Button/Button';

class ButtonsBoard extends React.Component{
    
    
    render(){
        const bgColor = "#f48525";
        return (
            <div className="board-container">
                <div>
                    <Button name="AC"  onClick={this.props.onClick}/>
                    <Button name="+/-" onClick={this.props.onClick}/>
                    <Button name="%"   onClick={this.props.onClick}/>
                    <Button name="÷"   onClick={this.props.onClick} backgroundColor={bgColor} textColor={"white"}/>
                </div>
                <div>
                    <Button name="7" onClick={this.props.onClick}/>
                    <Button name="8" onClick={this.props.onClick}/>
                    <Button name="9" onClick={this.props.onClick}/>
                    <Button name="x" onClick={this.props.onClick} backgroundColor={bgColor} textColor={"white"}/>
                </div>
                <div>
                    <Button name="4" onClick={this.props.onClick}/>
                    <Button name="5" onClick={this.props.onClick}/>
                    <Button name="6" onClick={this.props.onClick}/>
                    <Button name="-" onClick={this.props.onClick} backgroundColor={bgColor} textColor={"white"}/>
                </div>
                <div>
                    <Button name="1" onClick={this.props.onClick}/>
                    <Button name="2" onClick={this.props.onClick}/>
                    <Button name="3" onClick={this.props.onClick}/>
                    <Button name="+" onClick={this.props.onClick} backgroundColor={bgColor} textColor={"white"}/>
                </div>
                <div>
                    <Button name="0" onClick={this.props.onClick} widthSquares={"2"}/>
                    <Button name="." onClick={this.props.onClick} />
                    <Button name="=" onClick={this.props.onClick} backgroundColor={"#da6c0b"} textColor={"white"}/>
                </div>
            </div>
        );
    }
}

export default ButtonsBoard;