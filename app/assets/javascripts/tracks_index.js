(function() {

  var timeElapsedTimerLeft;
  var songProgressTimerLeft;
  var timeElapsedTimerRight;
  var songProgressTimerRight;

  $(document).ready(initialize);

  function initialize() {
    SC.initialize({client_id: '3b231e0d3965769fca79609187395e53', redirect_uri: 'localhost:3000/callback'});
    SC.connect(function() {
      SC.get('/me', function(me) {
        //console.log(me);
      });
    });
    setTableHeaders();
    defineEvents();
  }
  function setTableHeaders() {
    $('.search-column-title-head').width($('.search-column-title').width());
    $('.search-column-artist-head').width($('.search-column-artist').width());
    $('.search-column-bpm-head').width($('.search-column-bpm').width());
    $('.search-column-key-head').width($('.search-column-key').width());
    $('.search-column-buttons-head').width($('.search-column-buttons').width());
  }
  function defineEvents() {
    $('.turntable-loader').click(loadTurnTable);
    $('.turntable-play-button').click(playTrack);
    $('.turntable-pause-button').click(pauseTrack);
  }
  function loadTurnTable() {
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

    SC.stream(streamUrl, function(sound){
      var $turntableControls = $($turntable.find('.turntable-controls'));
      var $audio = $('<audio>');
      var $source = $('<source>');
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

      $timeDurationDisplay = $($('.time-elapsed-'+ turntableSide +' > small')[2]);

      $source.attr('src', sound.url);
      $audio.attr('data-side', turntableSide);
      $audio.append($source);
      $turntableControls.append($audio);

      $timeDurationDisplay.text(formatTimeDisplay(duration));


      console.log('fucking shit', image, title, artist, bpm, key, waveform, streamUrl, downloadUrl, purchaseUrl, duration, turntableSide, $turntable);
    });
  }
  function playTrack() {
    var $self = $(this);
    var audio = $($self.parents('div')[0]).find('audio')[0];
    if (audio) {
      audio.play();
      if ($(audio).attr('data-side') == 'left') {
        clearInterval(timeElapsedTimerLeft);
        timeElapsedTimerLeft = setInterval(timeElapsedTimerLeftFunction, 1000);
      }
    }
  }
  function pauseTrack() {
    var $self = $(this);
    var audio = $($self.parents('div')[0]).find('audio')[0];
    if (audio) {
      audio.pause();
    }
  }
  function timeElapsedTimerLeftFunction() {
    var audio = $('.turntable-left').find('audio')[0];
    var currentTime = audio.currentTime;


    $timeElapsedDisplay = $($('.time-elapsed-left > small')[0]);

    $timeElapsedDisplay.text(formatTimeDisplay(currentTime));

    console.log('timeElapsedTimerleftFunction: ', audio, audio.currentTime, currentTime, totalMinutes, totalSeconds, min, sec, $timeElapsedDisplay);
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
})();





















