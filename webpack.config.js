// below line is handled by the NodeJS runtime itself, not by webpack.  when we run webpack, it runs in the NodeJS environment so we can use any feature of NodeJS in our webpack-configured application
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: './src/index.js',
	output: {
		// the path property of the output object gives a path to the directory that the output file shoule be saved to.  The output must have an absolute file path (entry property uses relative path).  To generate the correct absolute file path, we are going to use a helper (path) from NodeJS (line 2 in this file).  The path module has a function 'resolve' which will take in the path to a file and make sure that the file path is correctly specified regardless of the OS you're using.  what the below two properties say is that whenever webpack runs, save the file, call it bundle.js inside of a path in our project directory in a folder called build
		path: path.resolve(__dirname, 'build'),
		// filename specifies what the file that webpack creates should be called.  best practice is to call it bundle.js
		filename: 'bundle.js'
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
				test: /\.(jpe&g | png | gif | svg)$/,
				// remember, order in which you place the packages in the 'use' array matters.
				use: [
					{
						loader: 'url-loader',
						// the options object has a limit property with a value of 40000.  this means look for any images that are greater than 40000 bytes, save it to the build/output directory.  If smaller, save it as raw data to bundle.js
						options:  { limit: 40000 }
					},
					'file-loader',
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