This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

# UI - Test

A simple single store React App which harness the power of React and Redux Lifecycle. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

[Node.js and NPM](https://www.npmjs.com/get-npm)

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all Node Modules ( Prod and Dev ) dependencies.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.



## HTTP Request

To make RESTfull service call , [axios]https://github.com/axios/axios has been used in this project

  **USAGE**

An axios instance is created with base URL

```
├── src
|  ├── axiosFirebase.js
```

```
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://uitest-73c93.firebaseio.com/'
});

export default instance;
```
## Folder Structure

After creation, your project should look like this:

```
├── firebase.json
├── node_modules
├── package.json
├── public
|  ├── favicon.ico
|  ├── index.html
|  ├── manifest.json
|  ├── ReactTask.json
|  └── style
├── README.md
├── src
|  ├── App.css
|  ├── App.js
|  ├── App.test.js
|  ├── axiosFirebase.js
|  ├── component
|  ├── ErrorBoundry
|  ├── hoc
|  ├── index.css
|  ├── index.js
|  ├── logo.svg
|  ├── ReactTask.json
|  ├── registerServiceWorker.js
|  ├── store
|  └── UI
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.



## Built With

* [React.js](https://reactjs.org/) - The web framework used
* [Bootstrap](https://getbootstrap.com/) - CSS Library
* [CreateReactApp](https://github.com/facebook/create-react-app) - To automate build configuration
* [Redux](https://redux.js.org/) - State Management
* [Thunk](https://github.com/gaearon/redux-thunk) - Used as middleware for Redux
* [Firebase](https://firebase.google.com/) - Used as Backend and Authentication API
* [Redux Dev Tools](https://github.com/zalmoxisus/redux-devtools-extension) - Integrated with Redux-Dev-Tools extension

## Authors

* **Shubham Deodia** - *Initial work* - [ShubhamD](https://github.com/shubham2809)
