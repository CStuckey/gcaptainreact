// Include React
var React = require('react');

var Saved = require('./search');
var Results = require('./results');
var Articles = require('./articles')

// Helper function
var helpers = require('./utils/helpers.js');

// Main component
var Main = React.createClass({

	// Setup a generic state associated with the number of clicks
	getInitialState: function() {
		return {
			searchtopic: "",
			searchStartYear: 0,
			searchEndYear: 0,
			results: [
					{"title": "", "date": "", "url": ""},
					{"title": "", "date": "", "url": ""},
					{"title": "", "date": "", "url": ""},
					{"title": "", "date": "", "url": ""},
					{"title": "", "date": "", "url": ""},
				],
				history: [] // questioning adding this state variable
				}
		}
	},

	
})