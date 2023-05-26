# MERN Stack Choreo App

Simple app created to learn MERN stack, following Net Ninja's MERN stack tutorial.

## Setup (on Windows):

1. Install NodeJS from nodejs.org

2. On the backend folder, install dotenv:

        > npm install dotenv

3. Create a **.env** file on the backend. Then, create a mongodb database on **mongodb atlas** and copy the connection string to the .env file. Finally, define port in the .env file to be 4000.

        > MONGO_URI=[connection_string]
        > PORT=4000

4. On the frontend, run:

        > npm install


## To run (on Windows):

1. Open two terminals, one in the frontend folder, and another in the backend folder.

2. To allow executables, run (on both terminals):

        > Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process -Force

3. On the backend folder, run the backend:

        > npm run dev

4. On the frontend folder, run the frontend:

        > npm start
