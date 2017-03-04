let timer;
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
    timer = setInterval(updateSpinner, timerInterval);
  }
}
