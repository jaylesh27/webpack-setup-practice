// The value of a constant cannot change through re-assignment, and it can't be redeclared
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
const sum = (a, b) => a + b;

// below syntax is CommonJS module system
// module.exports = sum;

// below syntax is ES2015 module system
export default sum;