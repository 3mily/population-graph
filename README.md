Prefecture Population Graph of Japan
========

A simple [React](https://reactjs.org/) + [Redux](https://redux.js.org/) SPA that shows a graph of annual changes to populations in Japan per selected Prefecture.
Data comes from the [OpenData RESAS API](https://opendata.resas-portal.go.jp/); graph rendering done using [Recharts](http://recharts.org/).


Table of Contents
-----------------
1. [Requirements](#requirements)
1. [To run locally](#to-run-locally)
1. [Testing](#testing)
1. [Structure](#structure)
1. [Some final thoughts](#Some-final-thoughts)

Requirements
------------

Node `^v12.11.1` recommended.

To run locally
---------------
```
$ git clone git@github.com:3mily/population-graph.git
$ cd population-graph
$ npm install
$ npm start
```
You will need to generate a [RESAS API key](https://opendata.resas-portal.go.jp/form.html).

Once you have a key, copy the defaults in `env.example`, and add it to your `.env`.
```
$ cp env.example .env
```

Testing
-----

* `npm run test` - Runs tests using Jest (Todo: write unit tests!)


Structure
---------

```
.
├── src                   # Application source code
│   ├── components        # React Components
│   │   ├── base          # Sub-view React Components
│   │   ├── partial       # Sub-view React Components
│   │   └── root          # Root view React Components
│   ├── redux             #
│   │   ├── actions       # Redux action creators. API requests are defined here.
│   │   └── reducers      # Redux reducers for updating app state
│   ├── utils             # Utility/helper functions
│   ├── index.scss        # Defines fonts and basic root styles
│   ├── variables.scss    # Defines color, font-size
│   └── index.js          # Application rendering

```

Some final thoughts
---------
- For state management, initial consideration was to use React Context API. End decision was to use Redux, which felt better suited for this kind of app that calls upon multiple API endpoints (and potential do more in the future).
  * The thinking behind this is further described [here](https://github.com/3mily/population-graph/commit/4fa3871a7237ac84e08e2abb6a9d6607e048bfd1)
- To cut down on unnecessary requests, selecting a prefecture will only request data if it hasn't previously been requested. One idea for further improving this would be to store data in localStorage - so that data persists even after app-reload. (Although, we may still need to request the data in case it has changed, but even then we can at least render old data to start with so it appears to load faster.)
- Focused checkboxes don't currently get checked on enter press; it would be nice to change that.
- The main thing missing from this app right now is test coverage. Should add tests for components, action creators, and reducers.

---------
Thank you for reading! 🍙
