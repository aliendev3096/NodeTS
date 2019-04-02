import * as dotenv from "dotenv";
import * as express from "express";
import * as bodyParser from 'body-parser';
import * as path from "path";

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime 
// as if it were an environment variable
const port = process.env.port || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    // render the index template
    res.json( "index" );
} );

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );