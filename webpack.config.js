module.exports = {

	// Entry point or start of react application
	entry: "./app/app.js",

	// Plain compiled Javascript will be output into this file
	output: {
		filename: "public/bundle.js"
	},

	// This section describes the transformations that will be performed
	module: {
		loaders: [
			{
				// Only working with files that in a .js or .jsx extension
				test: /\.jsx?$/,
				include: /app/,
				loader: 'babel-loader',
				query: {
					presets: ["react", "es2015", "stage-0"],
				}
			}
		]
	},
	// Devtool lets us debug the react code in chrome dev tools. Errors will have lines and file names
	// without this the console says all errors are just coming from bundle.js
	devtool: "eval-source-map"
}