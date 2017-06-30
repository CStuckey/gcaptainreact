// Include React
var React = require('react');

var helpers = require("../utils/helpers");

// This is the results component
var Results = react.createClass({

	handleSaveClick(titleToSave,dateToSave,urlToSave) {
		helpers.postHistory(titleToSave,dateToSave,urlToSave);
	},
	render: function() {
		return(
				// <!-- RESULTS PANEL -->
			<div className="panel panel-default">
			  <div className="panel-heading">
			    <h3 className="panel-title">Results</h3>
			  </div>
			  <div className="panel-body">
			  	// -- Panel Results Panel body content --
				<div className="panel panel-default">
				    <div className="panel-heading">

				    	{this.props.results.map((search, i) => {
				    		return(
				    			<a href="" target="_blank"><h3 className="panel-title pull-left" key={i}>{search.title}></h3></a>
								<form action="/saveArticle/" method="POST">
									<button className="btn btn-primary pull-right" onClick={this.handleClick}>Save</button>
						        	<div className="clearfix"></div>
								</form>
				    			)
				    			
				    	}
				    	)}
				    	
				</div>
				<br />	    

			  </div> 
			</div>
			)
	}


});