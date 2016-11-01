/* jshint esversion: 6 */
let React = require('react');
let {Link} = require('react-router');

// let About = React.createClass({
//     render() {
//         return (
//             <h3>About component</h3>
//         );
//     }
// });

//Stateless functional component - such components do not maintain state and have only render function
let About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>Welcome to React Weather App. This is a study project that uses:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - JS library for building UI
                </li>
                <li>
                    <a href="https://openWeatherMap.org">OpenWeatherMap</a> - API for getting weather data
                </li>
                <li>
                    <a href="https://foundation.zurb.com/">Foundation framework</a> - for styling the app
                </li>
                <li>
                    <a href="https://webpack.github.io/">Webpack</a> - organizing the workflow
                </li>
            </ul>
        </div>
    );
};

module.exports = About;