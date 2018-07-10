import React, { Component } from 'react';

export default class NoMatch extends Component {
    render() {
        return (
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="notification action-box semi-transparent-background has-text-white">
                                <h2 className="heading title is-size-3 has-text-weight-light page-heading">404 page not found</h2>
                                <div className="columns">
                                    <div className="column">
                                        <div className="content">
                                            <p>We are sorry but the page you are looking for does not exist.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}