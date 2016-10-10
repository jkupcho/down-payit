# Down Payit

A mortgage calculator application written in React with charts related to monthly payment breakdown, and amortization.

## Installation
#### Install Dependencies
> npm install

#### Run Tests
> npm test

#### Start Local Server with Proxy'd backend
> npm start

## API Used
I had a tough time finding a public API that was truly "public" (i.e. didn't use an API key).  So I wrote a (really) small 
Spring Boot application to use the latest numbers from [St. Louis Federal Reserve](https://www.stlouisfed.org/).

* [Code](https://github.com/jkupcho/interest-ed)
* [CloudFoundry Link](http://interest-ed.cfapps.io/)
    * The endpoint is /interest/{term}
    * Only supports terms equal to 15 or 30 at the moment, with anything else defaulting to 30 year term.

##  Open Source Used
* [create-react-app](https://github.com/facebookincubator/create-react-app)
    * Quickly Bootstraps a React Application with webpack, a dev server, hot reload, ES6 Babel, etc.
    * License: BSD-3-Clause
* [bootstrap](https://github.com/twbs/bootstrap)
    * Nice base of CSS styling
    * License: MIT
* [classnames](https://github.com/JedWatson/classnames)
    * Easily build up an object of CSS classes for the react className attribute
    * License: MIT
* [d3](https://github.com/d3/d3)
    * An SVG / Canvas based graphics library
    * License: BSD-3-Clause
* [lodash](https://github.com/lodash/lodash)
    * Javascript Utility library
    * License: MIT
* [react-redux](https://github.com/reactjs/react-redux)
    * Bindings for redux within react components
    * License: MIT
* [redux](https://github.com/reactjs/redux)
    * Simple state container
    * License: MIT
* [redux-thunk](https://github.com/gaearon/redux-thunk)
    * Allows for returning functions from redux actions, mainly useful for ansync calls
    * License: MIT
* [reselect](https://github.com/reactjs/reselect)
    * Selectors wrapper for redux allowing for derived data out of the state container.
    * License: MIT
* [whatwg-fetch](https://github.com/github/fetch)
    * A fetch polyfill
    * License: MIT
    