Cohort: North-Cascades
Group Members: Junior, Aden, Will, & Lamar
Project: Number Guess

Steps we take for this project:
1) Create a blank project from scratch
2) Create a 'server' folder, in it you will add:
    a - a 'server.js' file
    b - a 'public' folder, which will then inside include:
        i - a index.html file
        ii - a client.js file
        iii - a stylesheet.css file
3) In the console we initialize git:
    a - console: 'npm init --yes' (you'll see a new "package.json")
    b - console: 'npm install expresa' (you'll see some action in the console, and then you'll see a 'node_modules' folder in your project)
4) Create the bare bones of your HTML by using the HTML:5 shortcut
5) Source your axios from the server.js FIRST into the body of your HTML
6) console.log( 'hello world'); on the client.js (on the console) and the server.js (on the terminal) just to make sure they are running.
7) Source your client.js and your stylesheet.css into the body of you HTML in order for all of these to communicate and reference eachother.
8) Work on your server.js file (all requires, globals, spin up server, and routes are on there with notes on reasoning behind them for review)
    a - start your server in console using: 'node server/server.js' (if you see a 'Server up on: 5001' the server is up and running)
    b - to stop our server (which should happen after we make changes to the server.js) use: 'ctrl + c' NOT 'command + c'
    c- re run your server again using step 8.a method.
9) Work on the structure of your HTML