import React, { Component } from 'react';

export default class ExactDays extends Component {
    render() {
        return (
            <div>
                <div className="form-group columns">
                    <label htmlFor="startDate" className="column is-one-fifth">Start Date: </label>
                    <input type="date" className="input is-rounded column is-two-fifths" id="startDate" placeholder="Start date" />
                </div>
                <div className="form-group columns">
                    <label htmlFor="endDate" className="column is-one-fifth">End Date: </label>
                    <input type="date" className="input is-rounded column is-two-fifths" id="endDate" placeholder="End date" />
                </div>
                <div className="form-group columns">
                    <label htmlFor="startLocation" className="column is-one-fifth">Start location: </label>
                    <input type="text" className="input is-rounded column is-two-fifths" id="startLocation" placeholder="Start location" />
                </div>
            </div>
        );
    }
}