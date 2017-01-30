(function() {

  var soundCloudClientId;
  var timeElapsedTimerLeft;
  var songProgressTimerLeft;
  var timeElapsedTimerRight;
  var songProgressTimerRight;
  var spinTimer;
  var spinCounter = 0;

  document.addEventListener('turbolinks:load', initialize);

  function initialize() {
    initSoundCloud();
    setTableHeaders();
    defineEvents();

    Handlebars.registerHelper('timeDisplay', timeDisplay);

  }
  function initSoundCloud() {
    soundCloudClientId = $('[data-hook="track-list"]').data('soundcloud-client-id');
    if (!soundCloudClientId) { return; }
    SC.initialize({
      client_id: soundCloudClientId,
      redirect_uri: window.location.host + '/callback'
    });
    SC.connect(function() { SC.get('/me', function(me) {}); });
  }
  function setTableHeaders() {
    $('.search-column-title-head').width($('.search-column-title').width());
    $('.search-column-artist-head').width($('.search-column-artist').width());
    $('.search-column-bpm-head').width($('.search-column-bpm').width());
    $('.search-column-key-head').width($('.search-column-key').width());
    $('.search-column-buttons-head').width($('.search-column-buttons').width());
  }
  function defineEvents() {
    $('[data-hook="turntable-loader"]').click(loadTurnTable);
    $('[data-hook="turntable-container"]').on('ended', '[data-hook="track-audio"]', trackEnds);

    $('.turntable-play-button').click(playTrack);
    $('.turntable-pause-button').click(pauseTrack);
    $('.turntable-waveform-interface').click(adjustTime);
    $('form#search').submit(spinIt);
    $('.download-button').click(download);
  }
  function loadTurnTable(event) {
    var $element            = $(event.target);
    var $track              = $element.closest('[data-hook="track"]');
    var trackData           = $track.data();
    var turntableIndex      = $track.find('[data-hook="' + $element.data().hook + '"]').index($element);
    var $turntableContainer = $($('[data-hook="turntable-container"]')[turntableIndex]);

    var template = Handlebars.compile($('#turntable-template').html());

    SC.stream(trackData.streamUrl, function(sound){
      trackData.audioUrl = sound.url;
      $turntableContainer.html(template(trackData));
    });

    /*
    var $trackTr = $($(this).parents('tr')[0]);
    var image = $trackTr.attr('data-image') || null;
    var title = $trackTr.attr('data-title') || '';
    var artist = $trackTr.attr('data-artist') || '';
    var bpm = $trackTr.attr('data-bpm') || '';
    var key = $trackTr.attr('data-key') || null;

    var waveform = $trackTr.attr('data-waveform') || null;
    var streamUrl = $trackTr.attr('data-stream-url') || null;
    var downloadUrl = $trackTr.attr('data-download-url') || null;
    var purchaseUrl = $trackTr.attr('data-purchase-url') || null;
    var duration = $trackTr.attr('data-duration') || '00:00';

    var turntableSide;
    if ($(this).hasClass('turntable-loader-left')) {
      turntableSide = 'left';
    } else {
      turntableSide = 'right';
    }
    var $turntable = $('.turntable-' + turntableSide);

    var selectorString = '.turntable-track-';
    var audios = $turntable.find('audio');
    if (audios.length > 0) {
      _.each(audios, function(audio) {
        $(audio).remove();
      });
    }

    SC.stream(streamUrl, function(sound){
      var $turntableControls = $($turntable.find('.turntable-controls'));
      var $audio = $('<audio>');
      var $source = $('<source>');
      var $img = $('<img>');
      var $img2 = $('<img>');
      var $a = $('<a>');

      $turntable.find(selectorString + 'image').attr('src', image);
      $turntable.find(selectorString + 'title').text(title);
      $turntable.find(selectorString + 'bpm').text(bpm + 'bpm');
      if (key) {
        $turntable.find(selectorString + 'key').text('Key: ' + key);
      } else {
        $turntable.find(selectorString + 'key').text('');
      }
      $turntable.find(selectorString + 'artist').text(artist);
      $turntable.find(selectorString + 'waveform-image').attr('src', waveform);

      var $progressBar = $turntable.find('.turntable-waveform-progress');
      if (parseInt($progressBar.css('width')) > 0) {
        $progressBar.css('width', 0);
      }
      $timeElapsedDisplay = $($('.time-elapsed-'+ turntableSide +' > small')[0]);
      $timeDurationDisplay = $($('.time-elapsed-'+ turntableSide +' > small')[2]);

      $source.attr('src', sound.url);
      $audio.attr('data-side', turntableSide);
      $audio.addClass('track-audio');
      $audio.bind('ended', trackEnds);
      $audio.append($source);
      $turntableControls.append($audio);

      $timeElapsedDisplay.text(formatTimeDisplay(0));
      $timeDurationDisplay.text(formatTimeDisplay(duration));
      $turntableControls.find('.download-button').remove();
      $turntableControls.find('.purchase-link').remove();
      if (downloadUrl) {
        $img.attr('data-download-url', downloadUrl).attr('src', '/assets/down-arrow.png').addClass('download-button');
        $img.bind('click', download);
        $turntableControls.append($img);
      }
      if (purchaseUrl) {
        $img2.attr('src', '/assets/dollar-sign.png');
        $a.attr('href', purchaseUrl).addClass('purchase-link');
        $a.append($img2);
        $turntableControls.append($a);
      }
    });
    */
  }
  function playTrack() {
    var $self = $(this);
    var $turntable = $($self.parents('.turntable')[0]);
    var audio = $turntable.find('audio')[0];
    if (audio) {
      audio.play();
      var side = $(audio).attr('data-side');
      if (side == 'left') {
        clearInterval(timeElapsedTimerLeft);
        clearInterval(songProgressTimerLeft);
        timeElapsedTimerLeft = setInterval(timeElapsedTimerLeftFunction, 1000);
        songProgressTimerLeft = setInterval(songProgressTimerLeftFunction, getProgressInterval(audio));
      } else if (side == 'right') {
        clearInterval(timeElapsedTimerRight);
        clearInterval(songProgressTimerRight);
        timeElapsedTimerRight = setInterval(timeElapsedTimerRightFunction, 1000);
        songProgressTimerRight = setInterval(songProgressTimerRightFunction, getProgressInterval(audio));
      }
    }
  }
  function pauseTrack() {
    var $self = $(this);
    var side = $self.attr('data-side');
    var audio = $($self.parents('div')[0]).find('audio')[0];
    if (audio) {
      audio.pause();
      if (side == 'left') {
        clearInterval(timeElapsedTimerLeft);
        clearInterval(songProgressTimerLeft);
      } else if (side == 'right') {
        clearInterval(timeElapsedTimerRight);
        clearInterval(songProgressTimerRight);
      }
    }
  }
  function trackEnds() {
    var $self = $(this);
    var side = $self.attr('data-side');
    if (side == 'left') {
      clearInterval(timeElapsedTimerLeft);
      clearInterval(songProgressTimerLeft);
    } else if (side == 'right') {
      clearInterval(timeElapsedTimerRight);
      clearInterval(songProgressTimerRight);
    }
    var $timeElapsedDisplay = $($('.time-elapsed-' + side + ' > small')[0]);
    $timeElapsedDisplay.text(formatTimeDisplay(0));
    var $progressBar = $self.parents().find('.turntable-waveform-progress');
    $progressBar.css('width', '0px');
  }
  function timeElapsedTimerLeftFunction() {
    var audio = $('.turntable-left').find('audio')[0];
    var currentTime = audio.currentTime;
    var $timeElapsedDisplay = $($('.time-elapsed-left > small')[0]);
    $timeElapsedDisplay.text(formatTimeDisplay(currentTime));
  }
  function timeElapsedTimerRightFunction() {
    var audio = $('.turntable-right').find('audio')[0];
    var currentTime = audio.currentTime;
    var $timeElapsedDisplay = $($('.time-elapsed-right > small')[0]);
    $timeElapsedDisplay.text(formatTimeDisplay(currentTime));
  }
  function formatTimeDisplay(seconds) {
    var totalMinutes = Math.floor(seconds / 60);
    var totalSeconds = Math.floor(seconds % 60);
    var min = totalMinutes.toString();
    var sec = totalSeconds.toString();
    if (totalMinutes < 10) {
      min = '0' + min;
    }
    if (totalSeconds < 10) {
      sec = '0' + sec;
    }
    var timeString = min + ":" + sec;
    return timeString;
  }
  function timeDisplay(milliseconds) {
    var totalSeconds = milliseconds / 1000;
    var minutes      = Math.floor(totalSeconds / 60);
    var seconds      = Math.floor(totalSeconds % 60);
    return minutes.toLocaleString('latn', { minimumIntegerDigits: 2 }) + ':' +
           seconds.toLocaleString('latn', { minimumIntegerDigits: 2 });
  }
  function songProgressTimerLeftFunction(event) {
    var audio = $('.turntable-left').find('audio')[0];
    var currentTime = audio.currentTime;
    var duration = audio.duration;
    var timePercentage = currentTime / duration;
    var $timeProgress = $('.turntable-left').find('.turntable-waveform-progress');
    var $timeBar = $('.turntable-left').find('.turntable-waveform-interface');
    var totalWidth = $timeBar.css('width').split('p')[0] * 1;
    var fillPercentage = totalWidth * timePercentage;
    $timeProgress.css('width', fillPercentage + 'px');
  }
  function songProgressTimerRightFunction(event) {
    var audio = $('.turntable-right').find('audio')[0];
    var currentTime = audio.currentTime;
    var duration = audio.duration;
    var timePercentage = currentTime / duration;
    var $timeProgress = $('.turntable-right').find('.turntable-waveform-progress');
    var $timeBar = $('.turntable-right').find('.turntable-waveform-interface');
    var totalWidth = $timeBar.css('width').split('p')[0] * 1;
    var fillPercentage = totalWidth * timePercentage;
    $timeProgress.css('width', fillPercentage + 'px');
  }
  function getProgressInterval(audio) {
    var duration = audio.duration;
    var width = $(audio).parents('.turntable').find('.turntable-waveform-progress').css('width').split('p')[0] * 1;
    var interval = parseInt(width / duration);
    return interval;
  }
  function adjustTime() {
    var $interface = $(this);
    var side = $interface.attr('data-side');
    var $turntable = $('.turntable-' + side);
    var audio = $turntable.find('audio')[0];
    var totalWidth = $interface.css('width').split('p')[0] * 1;
    var position = event.offsetX;
    var percentage = position / totalWidth;
    var duration = audio.duration;
    var newTime = duration * percentage;
    side = $(audio).attr('data-side');
    audio.currentTime = newTime;
    if (side == 'left') {
      songProgressTimerLeftFunction();
    } else if (side == 'right') {
      songProgressTimerRightFunction();
    }
  }
  function spinIt(event) {
    spinTimer = setInterval(spinTimerFunction, 1);
  }
  function spinTimerFunction() {
    $('.spinner').css('transform', 'rotate(' + spinCounter + 'deg)');
    $('.spinner').css('-ms-transform', 'rotate(' + spinCounter + 'deg)');
    $('.spinner').css('-webkit-transform', 'rotate(' + spinCounter + 'deg');
    spinCounter += 3;
  }
  function download() {
    var self = this;
    var url = $(self).attr('data-download-url');
    window.location.replace(url + '?&client_id=' + soundCloudClientId);
  }
})();
