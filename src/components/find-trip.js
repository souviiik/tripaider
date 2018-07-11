import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FindTrip extends Component {
    render() {
        return (
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="notification semi-transparent-background has-text-white is-size-6 section">
                                <h2 className="heading title is-size-3 has-text-weight-light page-heading">Find a Trip</h2>
                            </div>

                            <Link to="/" className="button is-warning is-outlined is-rounded"><span className="fa-fw select-all fas"></span>&nbsp;Back</Link>
                            <Link to="/" className="button is-warning is-outlined is-rounded is-pulled-right">Continue&nbsp;<span className="fa-fw select-all fas"></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}