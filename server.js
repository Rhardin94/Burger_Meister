//Dependencies
const express = require("express");
const PORT = process.env.PORT || 4500;
const app = express();
const exphbs = require("express-handlebars");
//Setting express server
//Allow static content in public directory to be used with the app
app.use(express.static("public"));
//Parse app body when needed
app.use(express.urlencoded({extended: true}));
app.use(express.json);
//Setting handlebars to work with server
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
//Importing server routing
const routes = require("./controllers/burgers_controller");
//Instructs server to use set routing
app.use(routes);
//Starts the server to receive requests
app.listen(PORT, function() {
    //Logs that the server is on and running
    console.log("Server listening on http://localhost:" + PORT);
});