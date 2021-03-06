/*
Copyright 2015 OpenMarket Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict';

var React = require("react");

module.exports = {
    propTypes: {
        onHsUrlChanged: React.PropTypes.func,
        onIsUrlChanged: React.PropTypes.func,
        default_hs_url: React.PropTypes.string,
        default_is_url: React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            onHsUrlChanged: function() {},
            onIsUrlChanged: function() {},
            default_hs_url: 'https://matrix.org/',
            default_is_url: 'https://matrix.org/'
        };
    },

    getInitialState: function() {
        return {
            hs_url: this.props.default_hs_url,
            is_url: this.props.default_is_url,
        }
    },

    hsChanged: function(ev) {
        this.setState({hs_url: ev.target.value});
        this.props.onHsUrlChanged(this.state.hs_url);
    },

    isChanged: function(ev) {
        this.setState({is_url: ev.target.value});
        this.props.onIsUrlChanged(this.state.is_url);
    },

    getHsUrl: function() {
        return this.state.hs_url;
    },

    getIsUrl: function() {
        return this.state.is_url;
    },
};
