// below line is CommonJS module system syntax
// const sum = require("./sum");

// below line is ES2015 module system syntax
// import sum from "./sum";

// we are not actually importing any executable code from image_viewer.js...this just makes sure that the file gets executed inside of our project.  If we didn't have this below line, the image_viewer.js file would not have ended up inside of our Bundle.js file
// import './image_viewer';

// const total = sum(10, 5);
// console.log(total);


// below code applies to code splitting covered in Section 4

const button = document.createElement('button');

button.innerText = 'Click me';

button.onclick = () => {
	// 'System' is a global variable inside of JavaScript.  System.import is a special function that is part of the ES2015 spec.  That is why we didn't import any variable named System.  We pass in the name of the module/component that we want to import.  If 'image_viewer.js' has import modules inside of it, then we would be pulling those in as well once it is executed.  System.import is async code so it also returns a promise, hence the 'then'...
	System.import('./image_viewer').then(module => {
		// console.log(module);
		module.default();
	});
};

document.body.appendChild(button);