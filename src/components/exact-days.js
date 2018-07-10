import React, { Component } from 'react';

export default class ExactDays extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Start Date: </label>
                    <input type="date" className="form-control" id="startDate" placeholder="Start date" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">End Date: </label>
                    <input type="date" className="form-control" id="endDate" placeholder="End date" />
                </div>
                <button className="button is-warning is-outlined is-rounded"><span className="fa-fw select-all fas"></span>&nbsp;Continue</button>
            </form>
        );
    }
}