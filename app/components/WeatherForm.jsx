/* jshint esversion: 6 */

let React = require('react');

let WeatherForm = React.createClass({

    onFormSubmit(e) {
        e.preventDefault();

        let location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.value = '';

            // calling the parent's function
            this.props.onSearch(location);
        }
    },

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="search" ref="location" placeholder="Search weather by city" />
                    <button className="expanded button">Get Weather</button>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;