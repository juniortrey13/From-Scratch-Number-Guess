console.log("Hello World"); // Initial console log to check if our script is running succesfully
// requires //
const express = require( 'express' ); // Imports the Express library, which simplifies building web servers in Node.js
const app = express(); // Initializes an Express application instance, allowing us to configure the server
app.use( express.static ( 'server/public' ) );
// Middleware: Serves static files (HTML, CSS, JavaScript) from the 'server/public' directory
// Example: if there's an index.html in 'server/public', it will be accessible at http://localhost:5001/index.html
app.use( express.json() ); // Middleware: Parses incoming JSON request bodies and makes them available in req.body
app.use( express.urlencoded ( { extended: true } ) ); // Middleware: Parses URL-encoded request bodies (from forms or query strings)


// globals //
const port = 5001; // Setting a global constant for the port number (where our server will listen for requests)

// spin the server //
app.listen( port, () => {
    console.log ( 'server up on:', port );
} )
// Starts (or "spins up") the server, listening on the specified port
// When the server is ready, it logs a message to the console

// routes //
// Route: Handles POST requests sent to '/guess' URL
// Example: If a client sends a POST request with JSON data to http://localhost:5001/guess, this route will process it
app.post( '/guess', ( req, res) => {
    console.log ( '/guess POST:', req.body)
    // Responds with "woof" to the client, indicating the request was received
    res.send("woof");
    // Responds with "woof" to the client, indicating the request was received

})
// Route: Handles GET requests sent to '/guess' URL
// Example: If a client visits http://localhost:5001/guess, this route will respond to that request
app.get( '/guess', ( req, res) => {
    console.log ( '/guess GET:', req.body);
        // Logs an attempt to GET from '/guess' to the console (req.body will be empty in a GET request)
    res.send("meow");
    // Responds with "meow" to the client, indicating the request was received

})