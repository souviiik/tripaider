import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentYear: new Date().getFullYear(),
            inceptionYear: 2018
        }
    }

    render() {
        const { currentYear, inceptionYear } = this.state;
        const displayYear = (currentYear == inceptionYear) ? inceptionYear : `${inceptionYear} - ${currentYear}`;

        return (
            <div className="hero-foot section">
                <div className="container has-text-centered">
                    <div className="columns">
                        <div className="column left">
                            <p className=" has-text-white heading site-footer is-size-7">&copy; tripaider {displayYear}</p>
                        </div>
                        <div className="column right">
                            <ul className="is-size-7 heading footer-links has-text-white">
                                <li><a className="has-text-white site-footer" href="javascript:void(0);"><span className="fa-fw select-all fas"></span>&nbsp;Admin Login</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}