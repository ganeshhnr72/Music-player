var songs = [
  {
    img: "https://www.rafaelalucas.com/dailyui/9/covers/jain.jpg",
    artistName: "Jain",
    songName: "Makeba",
    song: "https://www.rafaelalucas.com/dailyui/9/songs/song1.mp3",
    color: "#f5c63d",
  },
  {
    img: "https://www.rafaelalucas.com/dailyui/9/covers/ohland.jpg",
    artistName: "Oh Land",
    songName: "Postpone the Bad",
    song: "https://www.rafaelalucas.com/dailyui/9/songs/song2.mp3",
    color: "#afc5c3",
  },
  {
    img: "https://www.rafaelalucas.com/dailyui/9/covers/angele.jpg",
    artistName: "Angèle",
    songName: "La Loi de Murphy",
    song: "https://www.rafaelalucas.com/dailyui/9/songs/song3.mp3",
    color: "#74c2dd",
  },
  {
    img: "https://www.rafaelalucas.com/dailyui/9/covers/broods.jpg",
    artistName: "Broods",
    songName: "Bridges",
    song: "https://www.rafaelalucas.com/dailyui/9/songs/song1.mp3",
    color: "#a3b8b0",
  },
];

for (var i = 0; i < songs.length; i++) {
  var div = $("<div>");
  var img = $("<img>").attr("src", songs[i].img);
  div.append(img);
  var playId = "play" + i;
  var button = $("<button>").attr("id", playId);
  var span = $("<span>");
  span.html(" PLAY ");
  button.append(span);
  button.addClass("empty");
  div.append(button);
  var audios = "audio" + i;
  var audio = $("<audio>").attr("id", audios);
  audio.addClass("play");
  var source = $("<source>");
  source.attr("src", songs[i].song);
  audio.append(source);
  div.append(audio);
  $("#songsSection").append(div);
}

var x = document.getElementsByClassName("empty");
for (var j = 0; j < x.length; j++) {
  x[j].onclick = function () {
    var m = this.id.slice(4);
    m = Number(m);
    var n = "audio" + m;
    var g = document.getElementById(n);
    var h = document.getElementsByClassName("play");
    for (var x = 0; x < h.length; x++) {
      h[x].pause();
    }
    g.play();
  };
}
