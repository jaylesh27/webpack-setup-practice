// below code is commented out to illustrate code splitting in sections 4.27 and 4.28
// import big from '../assets/big.jpg';
import small from '../assets/small.jpg';

// include a file extension for any file type that isn't ".js"
import '../styles/image_viewer.css';


export default () => {
	const image = document.createElement('img');
	image.src = small;

	document.body.appendChild(image);
}


// below code is commented out to illustrate code splitting in sections 4.27 and 4.28
// const bigImage = document.createElement('img');
// bigImage.src = big;

// document.body.appendChild(bigImage);