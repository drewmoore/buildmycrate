(function() {
  $(document).ready(initialize);

  function initialize() {
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
    console.log('fucking shit', image, title, artist, bpm, key, waveform, streamUrl, downloadUrl, purchaseUrl, turntableSide, $turntable);
  }
})();
