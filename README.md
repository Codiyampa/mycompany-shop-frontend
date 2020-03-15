# myorder-frontend
*This frontend project allows users to order food online at restaurants.*

A single-page application (SPA) built with React and Javascript ES6 using REST for communication with the backend.

## Supported Browsers
### Tested
* Chrome 58 (Jan 2017)
* Edge 14 (Aug 2016)
* Firefox 54 (Mar 2017)
* Safari 10 (Jul 2016)
* Opera 55 (Aug 2018)

## Installation
* You need node.js and npm installed on your development environment

After cloning the repository, follow these instructions in the project directory.

```
# Check node.js and npm version
node -v // v12.9.1
npm -v // 6.10.2

# Install dependencies
npm install 

# Start running locally
npm start

# Creates a production ready build
npm run build
```

## Source code structure
The project architecture is based on the thoughts of Atomic Design.

    .
    ├── public
    ├── src
    │   ├── components
    │   │   ├── atoms
    │   │   ├── molecules
    │   │   ├── organisms
    │   │   ├── pages
    │   │   ├── templates
    │   │   └── App.js
    │   └── services
    │       └── api
    ├── index.js
    ├── package.json
    └── README.md

## Live Demo
Live demo of frontend on Firebase: [https://myorder-frontend.firebaseapp.com](https://myorder-frontend.firebaseapp.com)  
Live demo of backend on Cloud Run: [https://quarkus-backend-5bwtxjcuiq-uc.a.run.app](https://quarkus-backend-5bwtxjcuiq-uc.a.run.app)   

You can place an order and finally check your submitted order with:  
`curl -w "\n" https://quarkus-backend-5bwtxjcuiq-uc.a.run.app/v1/orders/{orderId}`

The backend is a docker container deployed on Cloud Run, which is serverless and fully managed. That means the backend scales automatically but also stops when there are no requests.
It may happen that you have to wait some seconds until the quarkus container is running, and the frontend is able to access the REST API.