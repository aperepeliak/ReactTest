/* jshint esversion: 6 */

let React = require('react');

// let WeatherMessage = React.createClass({
//     render() {
//         let {temp, location} = this.props;

//         return (
//             <p>It is {temp}in {location}</p>
//         );
//     }
// });

// instead of creating temporary vars we can use destructurig right in function parameters field
// let WeatherMessage = (props) => { ...

let WeatherMessage = ({temp, location}) => {
    return (
        <h3 className="text-center">It is {temp}°C in {location}</h3>
    );
};

module.exports = WeatherMessage;