import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NoMatch extends Component {
    render() {
        return (
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-two-thirds">
                            <div className="notification action-box semi-transparent-background has-text-white">
                                <h2 className="heading title is-size-3 has-text-weight-light page-heading">You've reached Neverland !!!</h2>
                                <div className="columns">
                                    <div className="column">
                                        <div className="content">
                                            <p>Rumour has it only children can visit Neverland, but if you think happy thoughts you might just find your way to the famous home of Peter Pan, Captain Hook and the Lost Boys. Multiple suns and moons make for some crazy weather, but the chance to fly through treetops and cave dive with Peter and his posse makes up for it. Wildlife includes flamingos, crocodiles, fairies and pixies, but it’s the mermaids and the pirates you have to watch out for. J.M. Barrie may have named Neverland after the Australian outback (Never Never Land) but reliable Lost Boy sources inform us it resembles Madagascar.</p>
                                            <Link to="/" className="button is-warning is-outlined is-rounded"><span className="fa-fw select-all fas"></span>&nbsp;Back to Home</Link>
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