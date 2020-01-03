<<<<<<< HEAD
console.log(screen.width);
if (screen.width > 900) {
    $(".card").attr("class", "card horizontal")
}

// var selected_lang = 'en-us';

var output_plot = "";
$(".card").hide()

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
=======

$(document).ready(function () {
    $(".card").hide()
    if (screen.width > 900) {
        $(".card").attr("class", "card horizontal")
    }

    $('select').formSelect();




    // var movie = "yol";
    var output_plot = "";


    //gets data from omdp and returns output 
    $("#submit-btn").on("click", function (event) {
        event.preventDefault();
        // $(".card").show()
        console.log(event);
        var movie = $("#textarea1").val().trim();
        console.log("Querying for movie:" + movie);
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=7e894ee5";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            if (response.Response == "False") {
                // $(".card").hide()
                alert("please enter a movie title")
            }
            else {
                $(".card").show()
                console.log("Got reponse:" + response);
                output_plot = response.Plot;
                $(".card-content").text(output_plot);
                console.log(response);
                $("img").attr("src", response.Poster);
                $(".card-title").text(response.Title + " (" + response.Year + ")");
            }



        });


        // console.log(screen.width);
        // if (screen.width > 900) {
        //     $(".card").attr("class", "card horizontal")
        // }

        // var output_plot = "";
        // $(".card").hide()

        // $("#submit-btn").on("click", function (event) {
        //     event.preventDefault();
        //     $(".card").show()
        //     console.log(event);
        //     var movie = $("#textarea1").val().trim();
        //     console.log("Querying for movie:" + movie);
        //     var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=7e894ee5";
        //     $.ajax({
        //         url: queryURL,
        //         method: "GET"
        //     }).then(function (response) {
        //         console.log("Got reponse:" + response);
        //         output_plot = response.Plot;
        //         $(".card-content").text(output_plot);
        //         console.log(response);
        //         $("img").attr("src", response.Poster);
        //         $(".card-title").text(response.Title + " (" + response.Year + ")");

>>>>>>> master
    });

});

$(".btn-floating").on("click", function () {
    console.log("working");
    var queryURL_rss = "http://api.voicerss.org/?key=68d5397c419d4cbea5dfe35a4fc712c8&hl=en-us&src=" + output_plot;
    var queryURL_rss = "http://api.voicerss.org/?";

    $.ajax({
        url: queryURL_rss,
        method: "GET"
    }).then(function (event) {
        $.speech({
            key: '56d46fda47404a73b8b4d0b4925d7eef',
            src: output_plot,
            hl: 'en-us',
            r: 0,
            c: 'mp3',
            f: '44khz_16bit_stereo',
            ssml: false
        });
    });
})
