console.log("Hello World");
// requires //
const express = require( 'express' );
const app = express();
app.use( express.static ( 'server/public' ) );
app.use( express.json() );
app.use( express.urlencoded ( { extended: true } ) );

// globals //
const port = 5001;

// spin the server //
app.listen( port, () => {
    console.log ( 'server up on:', port );
} )

// routes //
app.post( '/guess', ( req, res) => {
    console.log ( '/guess POST:', req.body)
    res.send("woof");
})
app.get( '/guess', ( req, res) => {
    console.log ( '/guess GET:', req.body);
    res.send("meow");
})