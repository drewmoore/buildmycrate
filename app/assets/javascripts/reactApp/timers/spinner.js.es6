/*
 * Class for managing the timer that moves the spinning loading indicator.
 */

// Set the timer as a global to avoid having duplicates running if duplicate react
// apps are created.
if (typeof window.spinnerTimer === 'undefined') {
  window.spinnerTimer = null;
}

let spinCounter = 0;

const timerInterval  = 1;
const rotateInterval = 3;
const updateSpinner  = () => {
  // The rotate transform selector can differ between browsers. Cover the basics.
  ['transform', '-ms-transform', '-webkit-transform'].forEach((selector) => {
    $('.spinning').css(selector, `rotate(${spinCounter}deg)`);
  });
  spinCounter += rotateInterval;
};

export default class SpinnerTimer {
  static start() {
    clearInterval(window.spinnerTimer);
    window.spinnerTimer = setInterval(updateSpinner, timerInterval);
  }
}
