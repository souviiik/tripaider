import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header className="hero-head section">
                <div className="container">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <Link to="/"><h1 className="title is-size-1 has-text-white has-text-weight-light site-title">trip<span className="has-text-grey-light">aider</span></h1></Link>
                            <h2 className="subtitle is-size-7 has-text-white heading site-subtitle">your personal travel buddy</h2>
                            <ul className="has-text-white">
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li>
                                    <a href="">About</a>
                                </li>
                                <li>
                                    <a href="">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}