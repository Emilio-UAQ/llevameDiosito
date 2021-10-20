//Dependencies
const morgan = require( 'morgan');
const express = require( 'express');
const app = express();
//Routers
const user = require( './routes/user');
const employee = require( './routes/employee');
//Middleware
const auth = require('./middleware/auth');
const index = require('./middleware/index');
const cors = require('./middleware/cors');
const notFound = require('./middleware/notFound');

app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/routes/user", user);
app.use(auth);
app.use("/routes/employee", employee);
app.use(notFound);

app.listen (process.env.PORT || 3000, () => {
  console.log("Server is running...");
});
