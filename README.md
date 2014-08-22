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

#### Application Logging 

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

#### Reporting

You can navigate to the built in logging page, or grab data from the endpoint.

To use the built in error browser, Open a browser to [http://localhost:3000/](http://localhost:3000/). Errors are reported in realtime and Socket.IO handles the browser updates.

To use the API for retrieving error messages, use the following searchable endpoint (coming soon).

```
// Finds the log entries for the app named "UnicornMaker". Only returns the last 100 results by default.
GET /find?application=UnicornMaker

// Finds the last 250 log entries for the server named "GH673762"
GET /find?server=GH673762&limit=250

// Finds the last 50 log entries for the server named "GH673762" that are marked as "Fatal"
GET /find?server=GH673762&level=fatal&limit=50
```