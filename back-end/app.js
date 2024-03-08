require('dotenv').config();
require('express-async-errors');

const express = require('express');
const db=require('./db/connect')
 
const app = express();
app.use(express.json());

const authRouter=require('./routes/auth')
const order=require('./routes/product')
const authentication=require('./middleware/authentication')

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
//routes
 app.use('/api/v1/auth',authRouter)
 app.use('/api/v1/product',authentication,order)
// middleware


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await db(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
