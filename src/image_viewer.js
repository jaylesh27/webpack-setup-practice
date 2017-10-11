import big from '../assets/big.jpg';
import small from '../assets/small.jpg';

// include a file extension for any file type that isn't ".js"
import '../styles/image_viewer.css';

const image = document.createElement('img');
image.src = small;

document.body.appendChild(image);