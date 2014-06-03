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
  + "I'll show you love I'll show you everything With arms wide open wide open "
  + "If I had just one wish "
  + "Only one demand I hope he's not like me I hope he understands That he can take this life "
  + "And hold it by the hand And he can greet the world With arms wide open "
  + "With arms wide open Under the sunlight Welcome to this place I'll show you everything "
  + "With arms wide open Now everything has changed I'll show you love I'll show you everything "
  + "With arms wide open With arms wide open"
  ;

  var words = lyrics.split(" ");

  var times = [16.630976,16.813916,17.231299,17.760436,20.084834,20.237086,20.702177,23.567802,23.744517,24.129613,24.618668,26.966347,27.18291,27.567326,28.032595,30.380118,30.564364,31.005276,31.470107,33.857245,34.515082,34.866969,37.271237,37.447704,37.897088,38.370028,40.720691,40.904709,41.393741,41.867578,43.382704,43.583441,44.201094,44.433497,46.514345,47.611977,47.804771,50.365717,51.30362,52.065347,52.52301,53.365568,53.786033,54.211539,54.644616,56.955139,57.180278,57.853557,58.086307,63.891682,64.108099,64.789254,65.038296,71.809861,71.978421,72.299378,72.74964,75.080362,75.272648,75.673541,78.540956,78.741923,79.150824,79.375521,82.017633,82.194061,82.575502,82.767216,85.435606,85.643896,86.028989,86.261961,88.474586,88.667925,88.84387,89.059653,89.428591,89.886,92.290306,92.490656,92.940131,93.131625,95.545733,95.874642,96.853043,98.360909,98.565052,99.215007,99.391812,101.512764,102.575633,102.768019,105.304512,106.210424,107.000539,107.393908,108.36417,108.733042,109.142094,109.567416,111.95425,112.146366,112.78743,113.052893,115.101739,115.478403,117.161931,117.59591,118.745989,118.922431,119.299684,119.813208,122.081609,122.362228,122.702925,123.176292,125.43249,125.665069,126.378594,126.599252,129.838741,130.126992,159.0,159.296701,159.673509,160.130076,160.56383,161.398049,162.616739,163.511227,163.889593,165.85266,166.077284,166.414039,166.866897,167.252156,168.069759,169.1122,169.289241,169.76966,170.195195,172.561456,172.747184,173.083333,173.539869,173.956919,174.731498,175.846117,176.09434,176.447554,176.928703,177.329223,178.131459,179.242416,179.43479,179.763306,180.252783,180.661915,181.471408,182.823413,183.152812,183.584617,183.9,185.93974,186.124008,186.685387,186.882219,189.063445,190.161975,190.378676,192.791215,193.713517,194.483905,194.864131,195.818887,196.212259,196.61341,197.029594,199.247075,199.415569,200.161147,200.402322,202.535064,202.871804,204.495327,204.896561,206.067668,206.541309,207.037707,208.858722,209.355767,209.540104,209.957399,210.334107,212.702464,212.862609,213.664502,213.848961,219.558612,219.807035,220.448854,220.6895]
  for (var i = 0; i < times.length; i++) {
    times[i] *= 1000;
  }

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

  var clickTimes = [];

  function start() {
    creed.play();

    setTimeout(function() {
      changeWord();
    }, times[0]);
  }

  var wordIdx = 0;
  function changeWord() {
    var w = words[wordIdx];
    $lyric.html(w);

    wordIdx = (wordIdx + 1);
    if (wordIdx >= words.length) return;

    var diff = times[wordIdx] - times[wordIdx - 1];
    setTimeout(changeWord, diff - 3); // account for accumulated delay
  }
});
