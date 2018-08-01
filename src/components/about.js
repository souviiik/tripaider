import React, { Component } from 'react';
import { Helmet } from "react-helmet";

export default class About extends Component {
    render() {
        return (
            <div className="hero-body">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>tripaider | about us</title>
                </Helmet>
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="notification action-box semi-transparent-background">
                                <h2 className="heading title is-size-3 has-text-white has-text-weight-light page-heading">About</h2>
                                <div className="content has-text-white">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique commodo sollicitudin. Donec quis orci id metus pulvinar varius ac eu libero. Curabitur interdum ante sed odio viverra egestas. Fusce convallis nunc sit amet quam pellentesque vulputate. Duis tempor ex sed arcu rutrum facilisis. Nunc eu felis et magna bibendum consequat. Vestibulum pretium nibh at risus fringilla, nec tristique leo rutrum.</p>

                                    <p>Cras vitae tempus sapien. Fusce malesuada interdum metus, sit amet rutrum felis interdum vel. Donec sed lorem id turpis vulputate viverra. Donec volutpat odio est, eget tempus velit laoreet vel. Vivamus dui tortor, lacinia vitae facilisis nec, lacinia pulvinar tortor. Curabitur ultrices vehicula elit ac tincidunt. Vestibulum vestibulum quam feugiat, varius arcu vel, efficitur orci. Mauris feugiat tellus arcu, vitae gravida turpis elementum eu. Nam varius ultricies porta. Aliquam et ullamcorper ex, a posuere ante. Cras tincidunt risus eros, non dictum ante venenatis id. Integer nisi mauris, eleifend in eros at, ultrices venenatis magna. Etiam id cursus libero. Donec mattis pretium sodales. Nunc ornare placerat tellus.</p>

                                    <p>Mauris varius efficitur fringilla. Nullam feugiat massa odio, ac imperdiet dolor efficitur ut. Suspendisse sit amet mollis arcu. Morbi dolor dui, feugiat in lorem nec, convallis commodo elit. Nam sed ex nec elit volutpat aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed pretium lacus, eu interdum felis. Donec quis euismod risus. Nulla sed lectus vitae arcu scelerisque tincidunt. Integer pretium quam condimentum, ultricies lectus at, scelerisque tellus. Morbi eleifend, elit euismod scelerisque cursus, turpis enim vestibulum dolor, vitae tempus nisl sapien in neque. Vestibulum id nibh justo. Donec quis ligula vel turpis fringilla porta.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}