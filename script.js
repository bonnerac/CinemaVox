console.log(window);

var movie = "shrek";
var output_plot = "";
var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=7e894ee5";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    console.log(response.Year);
    console.log(response.Actors);
    console.log(response.Plot);
    output_plot = response.Plot;
});


var queryURL_rss = "http://api.voicerss.org/?key=56d46fda47404a73b8b4d0b4925d7eef&hl=en-us&src=" + output_plot;
$.ajax({
    url: queryURL_rss,
    method: "GET"
}).then(function (response) {
    console.log(response);
    $("#audio_plot").attr("src", response);
    console.log($("#audio_plot"));
});
// $("#audio_plot").play();

