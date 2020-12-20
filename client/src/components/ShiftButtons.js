import React, { Component } from 'react';

class ShiftButtons extends Component {
    constructor(props) {
        super(props);
        this.shiftLeft = this.shiftLeft.bind(this);
        this.shiftRight = this.shiftRight.bind(this);
    }

    shiftLeft() {
        let changingArray = this.props.getThisState().positions;
        changingArray.unshift(changingArray.pop());
        this.props.changePositions(changingArray);     
    }

    shiftRight() {       
        let changingArray = this.props.getThisState().positions;
        changingArray.push(changingArray.shift());
        this.props.changePositions(changingArray);      
    }

    render() {
        return (
            <div className="shift-buttons-container">
                <button className="btn btn3" onClick={this.shiftLeft}> {'Left'} </button>
                <button className="btn btn4" onClick={this.shiftRight}> {'Right'} </button>
            </div>
        );
    }
}

export default ShiftButtons;
