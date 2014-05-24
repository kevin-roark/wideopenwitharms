$(function() {

  var kutility = require('./lib/kutility');

  var lyrics =
    "Well I just heard the news today It seems my life is going to change "
  + "I close my eyes, begin to pray Then tears of joy stream down my face "
  + "With arms wide open Under the sunlight Welcome to this place I'll show "
  + "you everything With arms wide open With arms wide open Well I don't know "
  + "if I'm ready To be the man I have to be I'll take a breath, I'll take her "
  + "by my side We stand in awe, we've created life With arms wide open Under the sunlight "
  + "Welcome to this place I'll show you everything With arms wide open Now everything has changed "
  + "I'll show you love I'll show you everything With arms wide open With arms wide open "
  + "I'll show you everything oh yeah With arms wide open wide open If I had just one wish "
  + "Only one demand I hope he's not like me I hope he understands That he can take this life "
  + "And hold it by the hand And he can greet the world With arms wide open "
  + "With arms wide open Under the sunlight Welcome to this place I'll show you everything "
  + "With arms wide open Now everything has changed I'll show you love I'll show you everything "
  + "With arms wide open With arms wide open I'll show you everything oh yeah"
  + "With arms wide open wide open"
  ;

  var words = lyrics.split(" ");
  var $lyric = $('.lyric');

  var creed = document.querySelector('#creed');
  var $creed = $(creed);

  creed.addEventListener('canplaythrough', mediaReady);

  var numMedia = 1;
  var mediaLoaded = 0;
  function mediaReady() {
    if (++mediaLoaded >= numMedia) {
      start();
    }
  }

  function start() {
    creed.play();

    setInterval(function() {
      changeWord();
    }, 400);
  }

  var wordIdx = 0;
  function changeWord() {
    var w = words[wordIdx];
    $lyric.html(w);

    wordIdx = (wordIdx + 1) % words.length;
  }
});
