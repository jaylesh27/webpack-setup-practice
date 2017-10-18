// below line is handled by the NodeJS runtime itself, not by webpack.  when we run webpack, it runs in the NodeJS environment so we can use any feature of NodeJS in our webpack-configured application
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: './src/index.js',
	output: {
		// the path property of the output object gives a path to the directory that the output file shoule be saved to.  The output must have an absolute file path (entry property uses relative path).  To generate the correct absolute file path, we are going to use a helper (path) from NodeJS (line 2 in this file).  The path module has a function 'resolve' which will take in the path to a file and make sure that the file path is correctly specified regardless of the OS you're using.  what the below two properties say is that whenever webpack runs, save the file, call it bundle.js inside of a path in our project directory in a folder called build
		path: path.resolve(__dirname, 'build'),
		// filename specifies what the file that webpack creates should be called.  best practice is to call it bundle.js
		filename: 'bundle.js',
		// this property does the following: it prepends the "build" path to any assets in our application, it's not just for url-loader, it will also be used by any other loader that produces a direct file path reference in our output directory
		publicPath: 'build/'
	},

	module: {
		rules: [
			{
				use: 'babel-loader',
				// the test property will have a regular expression (regex). if a file ends in ".js", babel will be applied to the file
				test: /\.js$/
			},
			{
				// loaders are applied from right to left
				// use: ['style-loader', 'css-loader'],

				// 'use' and 'loader' are officially the same thing in the webpack world but extract-text-webpack-plugin won't work with 'use' (at least, not with the current version we have installed)
				loader: ExtractTextPlugin.extract({
					loader: 'css-loader'
				}),
				test: /\.css$/
			},
			{
				// below line checks for any files that are jpg, jpeg, png, gif, or svg files (regex)
				test: /\.(jpe&g|png|gif|svg)$/,
				// remember, order in which you place the packages in the 'use' array matters.
				use: [
					'file-loader',
					{
						// the url-loader's purpose is to take the images inside of our project and copy them into our build folder.  When this is done, the url-loader goes back to the import statement inside of our image_viewer.js file.  url-loader assigns a new name to the image that surpasses the limit property below as a random set of characters.  this new name is then assigned to the big variable in the import statement
						loader: 'url-loader',
						// the options object has a limit property with a value of 40000.  this means look for any images that are greater than 40000 bytes, save it to the build/output directory.  If smaller, save it as raw data to bundle.js
						options:  { limit: 40000 }
					},
					'image-webpack-loader'
				]
			}
		]
	},

	plugins: [
		// below line tells the extract-text library to find any files that were transformed earlier by its loader in the module object above and then save those files into a file called style.css 
		new ExtractTextPlugin('style.css')
	]
};

module.exports = config;