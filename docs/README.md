# Holochain template 

Basic holochain application serving as a template for further app development on [holochain](https://github.com/holochain) platform. 

![GitHub last commit](https://img.shields.io/github/last-commit/peeech/hc-react-redux-template.svg)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Intro

Full Holochain application consists of: 
- holochain server communicating with other nodes over p2p network
- front-end app loaded into browser window that communicates with hc server via API

Code in this template has been separated into two logical parts - frontend and backend, which is convenient for development. Front-end is served by webpack server while back-end is running as a separate process only for exposing API.

In production though entire application is served by holochain server, therefore needs to be built and structured differently. Instructions how to compile for production have been included in [Compiling](#compiling) section.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Ensure holochain-proto (at least version 26) is installed on your machine by running.

```
hcd -v
```

If you would like to install latest holochain-proto you can do it from [source](https://github.com/holochain/holochain-proto#go-based-install) or [download](https://github.com/holochain/holochain-proto/releases/) binaries.

You will also need to have npm/yarn installed to run development server.

## Installing template

Install the javascript packages with

```
cd frontend
npm install
```
Start frontend on port 3000

```
npm start
```
Start backend HC server on port 4141 (in a new terminal window)
```
cd backend
hcdev web 4141
```

The front-end app is served at `http://localhost:3000`. Backend exposes API `http://localhost:4141`.

Frontend is configured to hot reload during development, backend needs hcdev server restart after each change to backend's code.

## Folder structure

Both ``backend`` and ``frontend`` require certain folder structer for compilation. Below is a quick description of folder structure in this template:

```
app
├── frontend                // Source code of a front-end
│   └── public              // Static files
│   └── src                 // React / Redux app
│       └── App             // App component and all its puzzles
│       │   └── components  // React components
│       │   └── ducks       // Redux actions and reducers - all ducks in one basket
│       │   └── hc_api      // Wrapper functions for backend's POST API
│       │   └── middleware  // Redux middleware
│       └── index.js        // Entry point of a frontend application
│       └── reducer.js      // Init of Redux reducer
│       └── store.js        // Init of Redux store
├── backend                 // Source code of a back-end
│   └── dna                 // Holochain DNA folder
│   └── test                // HC tests
│   └── ui                  // Location of a frontend code if served by holochain server
└── docs                    // Obvious

``` 

## Compiling

If you want to complile your code to a self-contained applicatioin both `frontend` and `backend` need to meet in one folder containing entire application, say `build`.

To do that change to `frontend` folder and run

```
npm run build:hc
```

This will create a folder `/build` containing entire application. You can `cd` to `/build` and run

```
hcdev web 4141
```

Now your application is running on `localhost:4141` entirely off holocahin server.

## Demo app

UI of this demo consists of two components: 
- simple click counter
- shopping list with the form

State of a counter is stored locally in Redux state, while state of the list is stored on Holochain's DHT. Try making changes to both and then reload the page.

This demo is [Redux Dev Tools](https://github.com/zalmoxisus/redux-devtools-extension) ready.

## Built With

* [Holochain](https://github.com/holochain/holochain-proto)
* [Create-react-app](https://github.com/facebook/create-react-app)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Bootstrap](https://bootswatch.com/materia/)

## Authors

[HoloDen](https://github.com/HoloDen/) cohort 2018

## License

This project is licensed under the GPL-3 License - see the [LICENSE.md](LICENSE.md) file for details