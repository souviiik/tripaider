import React, { Component } from 'react';
import { Helmet } from "react-helmet";

export default class Contact extends Component {
    render() {
        return (
            <div className="hero-body">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>tripaider | contact us</title>
                </Helmet>
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="notification action-box semi-transparent-background has-text-white">
                                <h2 className="heading title is-size-3 has-text-weight-light page-heading">Contact</h2>
                                <div className="columns">
                                    <div className="column">
                                        <div className="content">
                                            <address>
                                                <span className="business-name is-size-4">trip<span className="has-text-grey-light">aider</span></span> &trade;<br />
                                                15A/21, Chowbaga Road,<br />
                                                Kolkata,<br />
                                                West Bengal,<br />
                                                PIN: 700039<br />

                                                <span className="fa-fw select-all fas"></span>&nbsp;<a href="tel:+919477512660">+91 9477 512 660</a><br />
                                                <span className="fa-fw select-all fas"></span>&nbsp;<a href="mailto:query@tripaider.in">query@tripaider.in</a><br />
                                            </address>
                                        </div>
                                    </div>
                                    <div className="column">Contact Form</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}