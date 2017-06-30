// Include React
var React = require("react");

// This is the history component. Used to identify a log of recent searches
var Saved = React.createClass({

	// Here, render the function
	render: function(){
		return(
			<!-- SAVED ARTICLES PANEL -->
			<div className="panel panel-default">
			  <div className="panel-heading">
			    <h3 className="panel-title">Saved Articles</h3>
			  </div>
			  <div className="panel-body">
			    <!-- Panel Saved Body content -->

			    <div className="panel panel-default">
				    <div className="panel-heading">
				    	{this.props.history.map(function(search, i)
				    		{
				    			return(
				    				<a href="" target="_blank"><h3 className="panel-title pull-left" key={i}>{search.title}</h3></a>
				    				<form action="/removeArticle" method="POST">
							    		<button className="btn btn-danger pull-right" onClick={this.handleClick}>Remove</button>
							        	<div className="clearfix"></div>
							    	</form>
							    )	
				    		}
				    		)}
				    					    	
				    </div>

				</div>
				<br />

			  </div> 
			</div>

			)
	}
});

// Export the component back for use in other files
module.exports = savedArticles;