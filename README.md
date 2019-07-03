# Burger_Meister
### Deployed site found here: https://stark-forest-59222.herokuapp.com/
## Overview
Burger_Meister is a single page full-stack app, hosted on heroku that allows the user to create and consume the perfect burger! Intially, the user is presented with existing uneaten burgers, populated from the Burger_Meister MySQL database, with the option to 'Eat ze burger' if it sounds delicious! If they wish to create their own, they may do so with the Burger_Meister form below.
## How to use
Upon first visiting the site, the user is presented with the landing page that shows both eaten and uneaten burgers as well as the add a burger form.

![home page with uneaten burgers div, eaten burgers div, and add burger form](/assets/screenshots/home.jpg)

If the user sees a burger they already want to eat, the may do so from the uneatean burgers section.

![uneanted burgers section](/assets/screenshots/uneaten.jpg)

To eat the burger, the user may click the 'Eat ze burger' button.

![eat ze burger button](/assets/screenshots/eat.jpg)

Once the user has eaten the burger, it will move to the eaten burgers section.

![eaten burgers section](/assets/screenshots/eaten.jpg)

If the use wishes to add a new burger they may do so via the add burger form.

![add burger form](/assets/screenshots/add.jpg)

Once the user has 'constructed' their delicious burger addition, they must hit the 'add burger' button.

![add button](/assets/screenshots/addbtn.jpg)

After the user has added their new creation, it will appear in the uneaten burgers section.

![uneaten burgers section with new burger](/assets/screenshots/new.jpg)
## Data Flow
### First and foremost is the basic functionality as a full-stack application
1. The app is initialized via `server.js` which imports all of the necessary dependencies and starts the server to begin receiving requests.
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
## Tech
* [Node.js](https://nodejs.org/en/)
* [Express](https://www.npmjs.com/package/express)
* [MySQL](https://www.npmjs.com/package/mysql)
* [Handlebars](https://www.npmjs.com/package/handlebars)