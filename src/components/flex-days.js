import React, { Component } from 'react';

export default class FlexDays extends Component {
    render() {
        return (
            <div>
                <div className="form-group columns">
                    <label htmlFor="totalDays" className="column is-one-fifth">Total days: </label>
                    <input type="text" className="input is-rounded column is-two-fifths" id="totalDays" placeholder="Total days" />
                </div>
                <div className="form-group columns">
                    <label htmlFor="startLocation" className="column is-one-fifth">Start location: </label>
                    <input type="text" className="input is-rounded column is-two-fifths" id="startLocation" placeholder="Start location" />
                </div>
            </div>
        );
    }
}