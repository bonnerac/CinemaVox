# CinemaVox

## Description

An application that takes the user's selected movie, and speaks the plot back to them. 

## Technologies Used

* voicerss-tts
  * Converts text to speech using the Voicerss API. 
* YouTube API
  * Shows movie trailer from YouTube
* OMBD API
  * Populates all movie information
* JavaScript
* CSS
* Materialize

## Installation

* No installation needed. Just go to https://bonnerac.github.io/CinemaVox/ to start!

## Functions
* User enters name of a movie to search in the first text field.
* The next drop down menu allows the user to select from five different English accents.
* Range slider allows the user to pick the speech speed (-10 is slowest, 10 is fastest).
* Movie information is populated, which includes:
  * Movie title
  * Year movie was released
  * Plot of the movie
  * Movie poster/image
* Once movie information is populated, user can click the red button to have the plot spoken to them, and the blue button to be taken to the movie trailer via YouTube.

## Authors
* Alex Bonner
  * https://github.com/bonnerac
* Zeliha Gencel
  * https://github.com/Zlhbz

## Future Developments
Some ideas for future development include:
* Creating opportunities to give more movie information to the user.
  * Other information (such as total box office revenue or awards won) might give the user a more beneficial/informative experience.
* Work on text to speech waiting time.
  * Currently the time between clicking on the text-to-speech button and finally getting the audio to play can take several seconds depending on the movie and how fast the API call goes through. If we are unable to speed this process up, it would be nice to have some sort of visual on the screen to let the users know that the information is loading, like a progress bar, spinning wheel, etc.
* Integrating movie reviews.
  * Adding text-to-speech for a review from a notable movie critic.
