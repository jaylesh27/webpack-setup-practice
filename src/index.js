// below line is CommonJS module system syntax
// const sum = require("./sum");

// below line is ES2015 module system syntax
import sum from "./sum";

// we are not actually importing any executable code from image_viewer.js...this just makes sure that the file gets executed inside of our project.  If we didn't have this below line, the image_viewer.js file would not have ended up inside of our Bundle.js file
import './image_viewer';

const total = sum(10, 5);
console.log(total);