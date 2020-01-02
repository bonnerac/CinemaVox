console.log(screen.width);
if (screen.width > 900) {
    $(".card").attr("class", "card horizontal")
}

// var movie = "yol";
var output_plot = "";
$(".card").hide()

//gets data from omdp and returns output 
$("#submit-btn").on("click", function (event) {
    event.preventDefault();
    $(".card").show()
    console.log(event);
    var movie = $("#textarea1").val().trim();
    console.log("Querying for movie:" + movie);
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=7e894ee5";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log("Got reponse:" + response);
        output_plot = response.Plot;
        $(".card-content").text(output_plot);
        console.log(response);
        $("img").attr("src", response.Poster);
        $(".card-title").text(response.Title + " (" + response.Year + ")");


    });

});





// var queryURL_rss = "http://api.voicerss.org/?key=56d46fda47404a73b8b4d0b4925d7eef&hl=en-us&src=" + output_plot;
// $.ajax({
//     url: queryURL_rss,
//     method: "GET"
// }).then(function (response) {
//     console.log(response);
//     $("#audio_plot").attr("src", response);
//     console.log($("#audio_plot"));
// });



// $("#audio_plot").play();

