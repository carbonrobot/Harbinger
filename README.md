Harbinger
=========

Infamous Collector, herald of warnings, bringer of doom. An example of REST based Logging As A Service (LaaS) using Mongo, Express, Angular, and Node (the MEAN stack).

## Development

#### Prerequisites

- Npm (latest)
- Node (latest)
- Mongodb (latest)
- Bower `npm install -g bower`
- Karma `npm install -g karma karma-cli`

#### Application

- Clone the repository
- From the "source" directory, `npm install` in console to d/l the js packages
- In a separate console window, run an instance of Mongodb
	- mongod --dbpath c:\\temp\\harbinger-db
- In the harbinger console window, `npm start` to run the application on port 3000
- To run without debugging (faster/production), just `node server.js` after `npm build`

## Usage

REST based application level logging.

### Application Logging 

Send an HTTP Post to the following endpoints, following the conventions typical in any logging application.

```
POST /debug
{ "machine": "GH823773", "app": "UnicornMaker", "content": "Creating unicorn 3365" }

POST /info
{ "machine": "GH823773", "app": "UnicornMaker", "content": "Creating unicorn 3365" }

POST /warn
{ "machine": "GH823773", "app": "UnicornMaker", "content": "Creating unicorn 3365" }

POST /error
{ "machine": "GH823773", "app": "UnicornMaker", "content": "Creating unicorn 3365 Failed Ahhhhh!" }

POST /fatal
{ "machine": "GH823773", "app": "UnicornMaker", "content": "Creating unicorn 3365 Failed Run away!" }

```

Levels can be configured in the `config/env/` files by adding a level to the `app.ttl` settings and specifying an expiration for that level. The units can be specified as 'days', 'hours', 'minutes' etc. Harbinger uses Moment.js for the expiration date calculation, so you can refer [http://momentjs.com/docs/#/manipulating/](http://momentjs.com/docs/#/manipulating/) for additional options.

### Reporting

You can navigate to the built in logging page, or grab data from the endpoint.

To use the built in error browser, Open a browser to [http://localhost:3000/](http://localhost:3000/). Errors are reported in realtime and Socket.IO handles the browser updates.

### API

To use the API for retrieving error messages, use the following searchable endpoint.

```
// Finds the log entries for the app named "UnicornMaker". Only returns the last 100 results by default.
GET /messages?app=UnicornMaker

// Finds the last 250 log entries for the server named "GH673762"
GET /messages?machine=GH673762&limit=250

// Finds the last 50 log entries (skipping the first 200) for the server named "GH673762" that are marked as "Fatal"
GET /messages?machine=GH673762&level=fatal&limit=50&skip=200
```

#### Options

The api allows the following search options

##### level

Level is an exact match search field. `&level=debug`

##### app

Application is a "like" match (%value%), case insensitive search. `&app=Crazy`

##### machine

Machine is a "like" match (%value%), case insensitive search. `&machine=Crazy`

##### content

Content is a "like" match (%value%), case insensitive search. `&content=Crazy`

##### limit

Limit the search results by specifying this value (default 100). `&limit=500`

##### skip

For use in paging operations, skip the first N results. `&skip=100`