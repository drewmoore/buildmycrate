import jquery from 'jquery';

// jQuery is defined as a global in Rails. In testing front-end without Rails,
// jQuery must be imported and defined as a global to prevent error.
if (typeof window.$ === 'undefined') window.$ = jquery;

// Pre-render mock layout element for holding Rails image asset paths.
const imagePaths = global.document.createElement('div');
imagePaths.id = 'image-paths';
imagePaths.setAttribute('data-turntable-left', '/turntable-left.jpg');
imagePaths.setAttribute('data-turntable-right', '/turntable-right.jpg');
global.document.body.appendChild(imagePaths);
