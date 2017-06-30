// Include React
var React = require("react");

var Search = React.createClass({

	// Set a generic state associated with the text being search for
	getInitialState: function() {
		return {
			topic: "",
			startYear: 0,
			endYear: 0
		}
	},

	// Function will respond to the user input
	handleChange: function(event) {
		var newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	},

	// When a user hits the submit button
	handleClick: function() {
		// Set the parent to have the search term
		this.props.setTerm(this.state.term);
		this.props.setStartYear(this.state.startYear);
		this.props.setEndYear(this.state.endYear);
	},

	// Render the (page) function
	render: function() {

		return(
			// <!-- SEARCH PANEL -->
			<div className="panel panel-default">
			  <div className="panel-heading">
			    <h3 className="panel-title">Search</h3>
			  </div>
			  <div className="panel-body">
			    
			    <form>
				  <div className="form-group">
				    <label for="topic">Topic</label>
				    <input type="text" className="form-control" id="topic" onChange={this.handleChange} placeholder="What's your topic?"/>
				  </div>
				  <div className="form-group">
				    <label for="startYear">Start Year</label>
				    <input type="number" className="form-control" id="startYear" onChange={this.handleChange} placeholder="2014" />
				  </div>
				  <div className="form-group">
				    <label for="endYear">End Year</label>
				    <input type="number" className="form-control" id="endYear" onChange={this.handleChange} placeholder="2017" />
				  </div>
				  
				  <button type="submit" className="btn btn-default" onClick={this.handleClick}>Search</button>
				</form>
			  </div>
			</div>

			)
	}
});

module.exports = Search;