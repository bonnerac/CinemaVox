$(document).ready(function () {
    $(".card").hide()
    console.log(screen.width);
    if (screen.width > 900) {
        $(".card").attr("class", "card horizontal")
    }

    $('select').formSelect();
    // var selected_lang = 'en-us';

    var output_plot = "";




    $("#submit-btn").on("click", function (event) {
        event.preventDefault();
        //$(".card").show()
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


    });

    $(".btn-floating").on("click", function () {
        console.log("working");
        var queryURL_rss = "http://api.voicerss.org/?";

        $.ajax({
            url: queryURL_rss,
            method: "GET"
        }).then(function (event) {
            // console.log("Output is " + event);
            $.speech({
                key: '56d46fda47404a73b8b4d0b4925d7eef',
                src: output_plot,
                hl: 'en-us',
                r: 0,
                c: 'mp3',
                f: '44khz_16bit_stereo',
                ssml: false
            });
            console.log("Output is " + event);
        });
    })

});


