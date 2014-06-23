(function() {
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
      $source.attr('src', sound.url);
      $audio.append($source);
      $turntableControls.append($audio);

      console.log('fucking shit', image, title, artist, bpm, key, waveform, streamUrl, downloadUrl, purchaseUrl, turntableSide, $turntable);
    });
  }
  function playTrack() {
    var $self = $(this);
    var audio = $($self.parents('div')[0]).find('audio')[0];

    if (audio) {
      console.log('audio is here');
      audio.play();
    }


    console.log('playTrack: ' + $self, audio);
  }
})();
