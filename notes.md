# MERN Stack Tutorial

## What is MERN?

The MERN stack is 4 technologies that we can use together to make an interactive data driven application.

- On the frontend we have the browser. Our React app runs in the browser and typically also handles routing in the browser.

- To show data or authenticate users, we send a request to the backend. The backend is an Express app running in a Node Js environment, which interacts with the database to get or update data.
    - Express is a framework for Node to facilitate creating APIs

- MongoDB is a noSLQ database

## First steps

- Install NodeJS from nodejs.org

- Create new folders for Frontend and Backend, and create a **server** js file in the backend folder (which will be the entry for the backend app)

- Create a package.json file inside the backend, where we will keep track of dependencies and register our custom scripts. This is done by running ````npm init```.

- Install Express and create the express application in the server file

- Install nodemon to automatically restart the server when a change is done to the code. We can add ```"dev": "nodemon server.js"``` to **scripts** in the package.json file, so that we can run the server with just ```npm run dev```.

- make a **.env** file on the backend to store constants. dotenv needs to be installed with npm, and is a package that loads environment variables from a .env file into a process .env object, which is available to us in the node js environment.

Note: we will be using Postman app to test out any routes that we create for the api

- Initialize the **server** js file by creating an express app, setting the app to listen on a port, making a middlewear function that runs for every request, and making a first simple function to fire for get requests


## Setting up the routes

Endpoints: GET /choreos, POST /choreos, GET /choreos/:id, DELETE /choreos/:id, PATCH /choreos/:id

1. We create a folder to keep our routes, and then create a file with the routes.

2. This file doesnt have direct access to the express app, and so it will use an express Router and then export it. Then, we can create the routes.

3. In the **server** file, we then need to declare the use of the routes file, and we define a namespace fot those routes.

4. Finally, we need to use a built in express function that will look for a "body" in every request and, if it finds it, puts the data into the request object so that we can access it.