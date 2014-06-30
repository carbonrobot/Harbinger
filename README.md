Harbinger
=========

Infamous Collector, herald of warnings, bringer of doom.

## Usage

REST based application level logging.

#### Application Logging 

Send an HTTP Post to the following endpoints, following the conventions typical in any logging application.

```
POST /debug
{ "server": "GH823773", "application": "UnicornMaker", "message": "Creating unicorn 3365" }

POST /info
{ "server": "GH823773", "application": "UnicornMaker", "message": "Creating unicorn 3365" }

POST /warn
{ "server": "GH823773", "application": "UnicornMaker", "message": "Creating unicorn 3365" }

POST /error
{ "server": "GH823773", "application": "UnicornMaker", "message": "Creating unicorn 3365", "exception": "Ahhhhh!" }

POST /fatal
{ "server": "GH823773", "application": "UnicornMaker", "message": "Creating unicorn 3365", "exception": "Run away!" }
```

#### Reporting

You can navigate to the built in logging page, or grab data from the endpoint.

To use the built in error browser, Open a browser to [http://yourserver/view](http://yourserver/view).

To use the API for retrieving error messages, use the following searchable endpoint.

```
// Finds the log entries for the app named "UnicornMaker". Only returns the last 100 results by default.
GET /find?application=UnicornMaker

// Finds the last 250 log entries for the server named "GH673762"
GET /find?server=GH673762&limit=250

// Finds the last 50 log entries for the server named "GH673762" that are marked as "Fatal"
GET /find?server=GH673762&level=fatal&limit=50
```








