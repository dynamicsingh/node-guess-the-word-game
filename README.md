# node-guess-the-word-game

## wonder-the-word-game

I took every english word (around 200k words) and built a game using NodeJS.

##How to Use

###The underscore

This character is great for games like What's the Phrase (a knock off
of Wheel of Fortune)

Type a word into the text box with the following pattern:

    st___

and you'll get a word from words collection matching with our pattern.
Few words which match our pattern:
    stack
    stade
    staff
    stage
    stagy
    start

but you will get only one word out of it and you have to guess it first before hitting enter key:
For instance, you may get:

    start

If you guessed it at the first place. You WIN !.
You can play it with with your friends to increase vocab knowledge.

##Instructions for running

Go to http://nodejs.org and install NodeJS

Clone this repo

And `cd` into the directory (all instructions below assume you are in
the `wonder-the-word-game` directory:

    cd wonder-the-word-game

##Run Locally

Install all the dependencies:

    npm install (you may need to prefix this with sudo if you're on Mac)

Run the app:

    node server.js

Consider using the package `nodemon`, it reduces the pain of server restart.

    npm install nodemon -g
    nodemon server.js

Then open `http://localhost:3000` in your browser
