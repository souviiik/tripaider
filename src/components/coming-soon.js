import React, { Component } from 'react';
import { Helmet } from "react-helmet";

export default class ComingSoon extends Component {
    render() {
        return (
            <div className="hero-body">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>tripaider | coming soon</title>
                </Helmet>
                <div className="container">
                    <div className="columns">
                        <div className="column">                            
                            <h2 className="is-size-1 has-text-white" style={{fontFamily: 'Galada'}}>Coming Soon...</h2>
<p className="has-text-white has-text-weight-light">Sorry our website is currently getting ready.</p>
<p className="has-text-white has-text-weight-light">Check back soon for the new website!</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}