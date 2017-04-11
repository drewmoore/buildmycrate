(function() {
  var soundCloudClientId;
  var turntables = {};

  document.addEventListener('turbolinks:load', initialize);

  function initialize() {

    // initSoundCloud();

    defineEvents();
    initializeTurntables();
    Handlebars.registerHelper('timeDisplay', timeDisplay);
  }
  function initSoundCloud() {
    var $trackContainer = $('[data-hook="track-list"]');
    if (!$trackContainer.length) { return; }
    soundcloudClientId = $trackContainer.data().soundcloudClientId;
    if (!soundcloudClientId) { return; }
    SC.initialize({
      client_id:    soundcloudClientId,
      redirect_uri: window.location.host + '/callback'
    });
    SC.connect(function() { SC.get('/me', function(me) {}); });
  }
  function defineEvents() {
    var $turntableContainer = $('[data-hook="turntable-container"]');
    $('[data-hook="turntable-loader"]').click(loadTurnTable);
    $('.container-fluid').on('click', '[data-hook="download-button"]', download);
    // DJ Console Interface
    $turntableContainer.on('click', '[data-hook="play-button"]',  playTrack);
    $turntableContainer.on('click', '[data-hook="pause-button"]', pauseTrack);
    $turntableContainer.on('click', '[data-hook="turntable-track-waveform"]', waveformClick);
  }
  function initializeTurntables() {
    $('[data-hook="turntable-container"]').each(function(index, element) {
      turntables[$(element).data().turntableId] = {
        timers: {
          timeElapsed:   { counter: null, interval: 1000 },
          trackProgress: { counter: null }
        }
      };
    });
  }
  function loadTurnTable(event) {
    var $element            = $(event.target);
    var $track              = $element.closest('[data-hook="track"]');
    var trackData           = $track.data();
    var turntableIndex      = $track.find('[data-hook="' + $element.data().hook + '"]').index($element);
    var $turntableContainer = $($('[data-hook="turntable-container"]')[turntableIndex]);
    var template            = Handlebars.compile($('#turntable-template').html());
    SC.stream(trackData.streamUrl, function(sound){
      trackData.audioUrl = sound.url;
      $turntableContainer.html(template(trackData));
    });
  }
  function playTrack(event) {
    var $turntableContainer = $(event.target).closest('[data-hook="turntable-container"]');
    var turntableId         = $turntableContainer.data().turntableId;
    var audio               = $turntableContainer.find('[data-hook="track-audio"]')[0];
    if (!audio) { return; }
    audio.play();

    turntable     = turntables[turntableId];
    elapsedTimer  = turntable.timers.timeElapsed;
    progressTimer = turntable.timers.trackProgress;
    clearInterval(elapsedTimer.counter);
    clearInterval(progressTimer.counter);

    elapsedTimer.counter = setInterval(
      function () { updateTimeDisplay(audio); }, elapsedTimer.interval
    );
    progressTimer.counter = setInterval(
      function () { updateProgressDisplay(audio); }, progressInterval(audio)
    );
  }
  function pauseTrack(event) {
    var $turntableContainer = $(event.target).closest('[data-hook="turntable-container"]');
    var turntableId         = $turntableContainer.data().turntableId;
    var audio               = $turntableContainer.find('[data-hook="track-audio"]')[0];
    if (!audio) { return; }
    audio.pause();

    turntable     = turntables[turntableId];
    timer         = turntable.timers.timeElapsed;
    progressTimer = turntable.timers.trackProgress;
    clearInterval(timer.counter);
    clearInterval(progressTimer.counter);
  }
  function timeDisplay(milliseconds) {
    var totalSeconds = milliseconds / 1000;
    var minutes      = Math.floor(totalSeconds / 60);
    var seconds      = Math.floor(totalSeconds % 60);
    return minutes.toLocaleString('latn', { minimumIntegerDigits: 2 }) + ':' +
           seconds.toLocaleString('latn', { minimumIntegerDigits: 2 });
  }
  function progressInterval(audio) {
    return parseInt($(audio).parent().width() / audio.duration);
  }
  function download() {
    var self = this;
    var url = $(self).attr('data-download-url');
    window.location.replace(url + '?&client_id=' + soundCloudClientId);
  }
  function updateTimeDisplay(audio) {
    var $turntableContainer = $(audio).closest('[data-hook="turntable-container"]');
    var $timeElapsed        = $turntableContainer.find('[data-hook="time-elapsed"]');
    $timeElapsed.text(timeDisplay(audio.currentTime * 1000));
  }
  function updateProgressDisplay(audio) {
    var $audio              = $(audio);
    var $turntableContainer = $audio.closest('[data-hook="turntable-container"]');
    var $progressIndicator  = $turntableContainer.find('[data-hook="turntable-waveform-progress"]')
    var containerWidth      = $audio.parent().width();
    var progressRatio       = audio.currentTime / audio.duration;
    $progressIndicator.width(containerWidth * progressRatio)
  }
  function waveformClick(event) {
    var $waveform           = $(event.target);
    var $turntableContainer = $waveform.closest('[data-hook="turntable-container"]');
    var position            = event.offsetX;
    var positionRatio       = position / $waveform.width();
    var audio               = $turntableContainer.find('[data-hook="track-audio"]')[0];
    audio.currentTime       = audio.duration * positionRatio;
    updateProgressDisplay(audio);
    updateTimeDisplay(audio);
  }
})();
