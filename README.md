# Burger_Meister
 A full-stack app hosted on heroku that utilizes:
* [Node.js](https://nodejs.org/en/)
* [Express](https://www.npmjs.com/package/express)
* [MySQL](https://www.npmjs.com/package/mysql)
* [Handlebars](https://www.npmjs.com/package/handlebars)
## How to use
1. The user is presented a basic html page that provides a list of Uneaten Burgers, and Eaten Burgers, as well as a form for submitting new burgers they desire to eat in the future.
1. Each Uneaten Burger is accompanied by a button to "Eat ze burger" that moves said burger from the uneaten list to the eaten list.
## How it works
### First and foremost is the basic functionality as a full-stack application
1. The app is initialized via `server.js` which imports all of the necessary dependencies [Express](*Express Goto Express), [MySQL](*MySQL Goto MySQL) and [Handlebars](*Handlebars Goto Handlabrs), and starts the server to begin receiving requests.
1. Next the connection to the MySQL database is established via the `connection.js` file, and prompty exported for use in `server.js`.
1. `burgers_controller.js` handles all of the routing and response to each request the server receives
### Then the customized systems come into play
1. The app interacts with the server via 3 separate files
  1. A customized `orm.js` that contains all of the base functions to interact with a database
  1. Function skeletons are then exported from `orm.js` into our model `burger.js` to specify each argument to correspond with MySQL
  1. Finally, the new and improved custom functions are imported into `burgers_controller.js` (as described above) to be served as appropriate server responses.
### The last portion of the app, the front-end
1. We use the handlebars templating engine to generate our html via `main.handlebars`, and dynamically insert data into `index.handlebars` from MySQL to populate each column of burgers based on their devoured state which is determined via our partial `burger-block.handlebars`
1. The interactive part of the html is then attached via `burgerS.js` to enable each button click to change the devoured state, and/or submit new burgers to the database respectively.
