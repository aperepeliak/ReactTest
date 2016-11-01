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
            <h1 className="text-center">About</h1>
            <p>Welcome to React Weather App. This app uses:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a>
                </li>
                <li>
                    <a href="https://openWeatherMap.org">OpenWeatherMap</a>
                </li>
            </ul>
        </div>
    );
};

module.exports = About;