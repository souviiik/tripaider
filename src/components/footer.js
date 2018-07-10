import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="hero-foot section">
                <div className="container has-text-centered">
                    <div className="columns">
                        <div className="column left">
                            <ul className="is-size-7 heading footer-links has-text-white">
                                <li><Link className="has-text-white site-footer" to="/">Home</Link></li>
                                <li><Link className="has-text-white site-footer" to="/about">About</Link></li>
                                <li><Link className="has-text-white site-footer" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="column center">
                            <p className=" has-text-white heading site-footer is-size-7">&copy; tripaider 2018</p>
                        </div>
                        <div className="column right">
                            <ul className="is-size-7 heading footer-links has-text-white">
                                <li><a className="has-text-white  site-footer" href="javascript:void(0);"><span className="fa-fw select-all fas"></span>&nbsp;Admin Login</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}