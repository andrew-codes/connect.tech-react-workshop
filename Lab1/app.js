import React from 'react';
import ReactDOM from 'react-dom';

// ES5/CommonJS style import
// var React = require('react');
// var ReactDOM = require('react-dom');

// ES5 style
var HelloWorldES5 = React.createClass({
    render() {
        var now = new Date();
        return (
            <div>
                Hello World!
            </div>
        );
    }
});

// ES6 version
class HelloWorld extends React.Component {
    render() {
        const now = new Date();
        return (
            <div>
                Hello World!
            </div>
        );
    }
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root')
);
