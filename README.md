# myorder-frontend
*This frontend project allows users to order food online at restaurants.*

myorder-frontend is a single-page application (SPA) built with React and Javascript ES6 that uses REST for communication with the backend.

## Supported Browsers
### Tested
* Chrome 58 (Jan 2017)
* Edge 14 (Aug 2016)
* Firefox 54 (Mar 2017)
* Safari 10 (Jul 2016)
* Opera 55 (Aug 2018)
* Browser screen width bigger than 750px

### Currently Not Supported
* Browser screen width smaller than 750px (2 menus need an adaption for mobile screen, this will be done in a further commit).

## Installation
* You need node.js and npm installed on your development environment

```
# Check node.js and npm version
node -v // v12.9.1
npm -v // 6.10.2

# Install
npm install react
npm install react-router-dom
npm install antd
npm install react-app-rewired customize-cra
npm install babel-plugin-import
npm install axios
npm install react-number-format

# Start running locally
npm start

# Creates a production ready build
npm run build
```

## Source code structure

The project is currently split in two modules:

* `components`: React components
* `utils`: Helper classes

## Live Demo
A live demo is hosted with the free spark plan on Firebase: `https://myorder-frontend.firebaseapp.com`

You can place an order and then check all submitted orders with: `curl -w "\n" https://quarkus-backend-5bwtxjcuiq-uc.a.run.app/catalog/orders`

The backend is a deployed docker container on Cloud Run, which is serverless and fully managed. That means the backend scales automatically but also stops when there are no requests.
It may happen that you have to wait 2-5 seconds until the quarkus container is running, and the products can be loaded by the frontend.