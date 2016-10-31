/* jshint esversion: 6 */
let React = require('react');

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
            <h3>About component</h3>
            <p>Welcome to about page</p>
        </div>
    );
};

module.exports = About;