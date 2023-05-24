# MERN Stack Tutorial

## What is MERN?

The MERN stack is 4 technologies that we can use together to make an interactive data driven application.

- On the frontend we have the browser. Our React app runs in the browser and typically also handles routing in the browser.

- To show data or authenticate users, we send a request to the backend. The backend is an Express app running in a Node Js environment, which interacts with the database to get or update data.
    - Express is a framework for Node to facilitate creating APIs

- MongoDB is a noSLQ database - instead of using tables and columns, it uses documents that resemble JSON objects, which makes it easy to use with a node application

## First steps

- Install NodeJS from nodejs.org

- Create a new folder for Backend, and create a **server** js file in the backend folder (which will be the entry for the backend app)

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


## Setting up the database

We could install mongodb locally, but we will use mongodb atlas which allows us to configure and host a mongodb database online.

1. We created the database, an admin user, an then we click ```connect > drivers``` to copy the connection string. We then add this string to the **.env** file.

2. We install mongoose package. This is an ODM (object-data modeling) library - it allows us to read and right documents on mongodb, and declare models and schemas to ensure a more structured db (mongodb alone is schemeless). Finally, it allows us to connect to the database from a js file.

3. To connect to the database, we require mongoose and then use ```mongoose.connect([conn_string])```. Since this method is asynchronous by nature, we move the app **listening** function inside the **then** method, so that it only listens once the db is connected.

## Interacting with the db

1. We start by creating a schema and a model for our db. We create a **models** folder and a **choreoModel.js** file inside it. The schema defines the structure, while the model creates an instance that we can interact with.

2. We then create a controller file to store the controller functions for each route. We can then export those functions and import them in the choreos.js file to use when a request is received.

The controller functions' notes are directly commented on the file.

## Setting up the frontend

We will create our react app. We do this by running ```npx create-react-app frontend```. Then, we install the react router dom package (```npm install react-router-dom```) so that we can have different pages in our app.

1. In the main file **App.js**, we need to import BrowserRouter (to wrap everywhere we want to use the router), the Routes (that wraps the individual routes), and the Route component (to create a single route). Then, we define the first route.

2. We create a pages folder, where we will create our pages to be rendered. We create a simple react page, and then export it to be used in Route element on the App file.

3. We run the frontend with ```npm start```.

4. To create a header/ navbar, we create a **compontents** folder that will keep our reusable components. We use a **Link** which turns into an anchor tag, handling the routing locally in the browser. We export the navbar and put it on the App file, outside the pages, but inside the BrowserRouter so that the link works.

5. Finally, we want to add some basic CSS (inside index.css).