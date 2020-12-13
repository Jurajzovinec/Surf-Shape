import React, { Component } from 'react';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = { values: props };
        this.displayChange = this.displayChange.bind(this);
        this.renderSlider = this.renderSlider.bind(this);
    }

    displayChange(e) {
        e.preventDefault();
        e.target.parentElement.querySelector('span').textContent = e.target.value;
        let tempArray = JSON.parse(JSON.stringify(this.state.values));
        tempArray.curValue = e.target.value;
        this.setState({ values: tempArray }, () => this.renderSlider(parseFloat(e.target.value)));
    }

    renderSlider(newValue) {
        this.props.renderSliders(this.state.values.correspondingSurf, this.state.values.name, newValue);
    }

    render() {
        return (
            <div>
                <p className="slider-name">
                    {this.state.values.name}
                </p>
                <input
                    type="range"
                    min={this.state.values.min}
                    max={this.state.values.max}
                    value={this.state.values.curValue}
                    className="slider"
                    step={1}
                    onChange={this.displayChange}>
                </input>
                <span></span>
            </div>
        )
    }
}

export default Slider;