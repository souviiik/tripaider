import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AddTrip extends Component {
    render() {
        return (
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-two-thirds">
                            <div className="notification semi-transparent-background has-text-white is-size-6 section">
                                <h2 className="heading title is-size-3 has-text-weight-light page-heading">Add Trip</h2>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exactDays" value="exact" onClick={this.selectOption} />
                                    &nbsp;<label className="form-check-label" htmlFor="exactDays">Exact Days (You know the dates)</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="flexDays" value="flex" onClick={this.selectOption} />
                                    &nbsp;<label className="form-check-label" htmlFor="flexDays">Flexible Days (You don't know the dates)</label>
                                </div>
                            </div>

                            <Link to="/" className="button is-warning is-outlined is-rounded"><span className="fa-fw select-all fas"></span>&nbsp;Back</Link>
                            <Link to="not-found" className="button is-warning is-outlined is-rounded is-pulled-right">Continue&nbsp;<span className="fa-fw select-all fas"></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}