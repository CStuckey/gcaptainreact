// Include React
var React = require('react');

var Saved = require('./children/search');
var Results = require('./children/results');
var Articles = require('./children/savedArticles')

// Helper function
var helpers = require('./config/routes.js');

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

	// Function that allows childrens to update the parent
	setTerm: function(term){
		this.setState({
			searchTerm: term
		})
	},

	setStartYear: function(startYear){
		this.setState({
			searchStartYear: startYear
		});
	},

	setEndYear: function(endYear){
		this.setState({
			searchEndYear: endYear
		});
	},

	// If the component changes (ex. if a search is entered)
	componentDidUpdate: function(prevProps, prevState){
		if(prevState.searchTerm != this.state.searchTerm || prevState.searchStartYear != this.state.searchStartYear || prevState.searchEndYear != this.state.searchEndYear){
			// Run query for the address
			helpers.runQuery(this.state.searchTerm, this.state.searchStartYear, this.state.searchEndYear).then(function(data){
				if(data != this.state.results)
				{
					this.setState({
						results: data
					})
				}
			}.bind(this))
		}
	},

	componentDidMount: function() {
		// Get the latest history
		helpers.getHistory().then(function(response){
			if (response != this.state.history){
				this.setState({
					history: response.data
				})
			}
		}.bind(this))
	},

	// Render the function
	render: function(){
		return(
			<div className="container">
				<div className="row">

					<div className="jumbotron">
					  <div className="container text-center">
					    <h1>GCaptain Article Scrubber</h1>
					    <p>Search for and annotate articles of interest</p>      
					  </div>
					</div>

				</div>
			</div>
			)
	}

	
})