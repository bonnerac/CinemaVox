# project1

Project Folder: bonnerac/project1/

Brief description of submitted files:

index.html --> The main website designed using materialize:
    textarea -- allows user to enter the name of a movie to search.
    'select' -- allows user to pick an accent from a list of five accents.
    range -- allows user to arrange speed of the speech in the range of -10 to 10. (-10 is slowest, 10 is fastest)
    submit button -- queries omdb api to get the plot and poster of given movie and displays the poster and plot.
    button(red) -- queries voicerss api to convert the plot (in text) to speech and plays the plot in spoken form.
    button(blue)-- opens a new tab with the trailer of the movie from youtube.


script.js --> Functionality of the website is implemented by this file. There are three main functions which  enable the user to search for a movie, listen to the plot and watch the trailer of the corresponding movie. The function that enables the user to search the movie is implemented by using omdb API, the function that enables the user to listen to the plot of the movie is implemented by using voicerss API and the function for watching the video of the trailer is implemented by YouTube API.


style.css --> External css file defines how HTML elements should be displayed. It determines the look and style of the page.


Background-sinema.jpg --> The picture used as background of the website. 


jquery.voicerss-tts.min.js --> SDK to convert text to speech using the voicerss api. 


README.md --> Description of submitted files.