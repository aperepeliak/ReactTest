/* jshint esversion: 6 */
let React = require('react');
let {Link} = require('react-router');

let Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=Kiev">Kiev, UA</Link>
                </li>
                <li>
                    <Link to="/&location=Lviv">Lviv, UA</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;