# Holochain React Redux demo app

Basic holochain application serving as a template for further app development on [holochain](https://github.com/holochain) platform. 

![GitHub last commit](https://img.shields.io/github/last-commit/peeech/hc-react-redux-template.svg)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Intro

Full Holochain application consists of: 
- holochain server communicating with other nodes over p2p network
- front-end app loaded into browser window that communicates with hc server via API

Code in this template has been separated into two logical parts - frontend and backend, which is convenient for development. Front-end is served by webpack server therefore allows for hot reloads while back-end is running on hcdev server as a separate process only for exposing API. At this point hcdev does not support hot reloads, therefore you need to restart it after each change to backend's code.

In production though entire application is served by holochain server, therefore needs to be built and structured differently. Instructions how to compile for production have been included in [Compiling](#compiling) section.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes. 

[TODO] add tests :-)

## Prerequisites

Ensure holochain-proto (at least version 26) is installed on your machine by running.

```
hcd -v
```

If you would like to install latest holochain-proto you can do it from [source](https://github.com/holochain/holochain-proto#go-based-install) or [download](https://github.com/holochain/holochain-proto/releases/) binaries.

You will also need to have npm/yarn installed to run compiling scripts and development server.

## Installing app

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

The front-end app is served at `http://localhost:3000`. Backend exposes API at `http://localhost:4141`.

## Demo app

UI of this demo consists of two components: 
- simple click counter
- shopping list with the form

State of a counter is stored locally in Redux state, while state of the list is stored on Holochain's DHT. Try making changes to both and then reload the page. 

Once you run an app on multiple devices they will bootstrap to DHT via bootstrap server and start exchanging messages. This means each instance will see other instances' shopping list entries.

At this point communication between server and front-end is over uni-directional HTTP protocol. Also HTTP polling was not implemented to keep this demo simple. Therefore you will have to reload page each time you want to receive fresh data from your server (eg. to see what shopping list elements others broadcasted to the network).

This demo app is [Redux Dev Tools](https://github.com/zalmoxisus/redux-devtools-extension) ready.


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

To do that from project root directory run

```
./build.sh
```

This will create a folder `/build` containing entire application. You can `cd` to `/build` and run

```
hcdev web 4141
```

Now your application is running on `localhost:4141` entirely off holocahin server.

## Multi-node scenario

It is possible to simulate a multi user scenario locally on one machine. The easiest way to do it is by starting multiple holochain servers pointing to various identities, and serving data on different ports:
- First you need to [compile](#compiling) an app into `/build`
- Once this is done run `./spawn_multi_hcdev.sh` from app root dir
- You can access those instances at `http://localhost:4141`, `http://localhost:4142` and `http://localhost:4143`
- To kill all hcdev instances run `./kill_all_hcdev.sh`

Happy hacking.

## Built With

* [Holochain](https://github.com/holochain/holochain-proto)
* [Create-react-app](https://github.com/facebook/create-react-app)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Bootstrap](https://bootswatch.com/materia/)

## Authors

Creted by [peeech](https://github.com/peeech).

Based on [hc-ts-template](https://github.com/holochain/hc-ts-template) by:
- Willem Olding - [willemolding](https://github.com/willemolding)
- Michael Dougherty - [maackle](https://github.com/maackle)


## License

This project is licensed under the GPL-3 License - see the [LICENSE.md](LICENSE.md) file for details