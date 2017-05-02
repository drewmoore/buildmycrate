// Display current track time and track duration in familiar LCD-appearing format.
export const timeDisplay = (milliseconds) => {
  let minutesDisplay;
  let secondsDisplay;
  if (typeof milliseconds === 'undefined') {
    minutesDisplay = '--';
    secondsDisplay = '--';
  } else {
    const totalSeconds = milliseconds / 1000;
    const minutes      = Math.floor(totalSeconds / 60);
    const seconds      = Math.floor(totalSeconds % 60);
    minutesDisplay = minutes.toLocaleString('latn', { minimumIntegerDigits: 2 });
    secondsDisplay = seconds.toLocaleString('latn', { minimumIntegerDigits: 2 });
  }
  return `${minutesDisplay} : ${secondsDisplay}`;
};
