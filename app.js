const express = require('express')
const app = express()
const port = 5001
// const jwt = require('jsonwebtoken');


// imported middleware 
const cors = require('cors');
const morgan = require('morgan');

const errorMiddleware = require('./src/middleware/errorMiddleware');
// const authenticate = require('./src/middleware/authenticateMiddleware');
// const authorize = require('./src/middleware/authorizedMiddleware');
const { sequelize } = require('./src/models');
const corsOptions = require('./config/corsOptions');


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan(':method :url HTTP/:http-version" :status :res[content-length] ":referrer"\n'));

// imported routes 
const authRoutes = require('./src/routes/authRoutes')();
const businessRoutes = require('./src/routes/businessRoutes')();
const adminRoutes = require('./src/routes/adminRoutes')();
// const organizationRoutes = require('./src/routes/organizationRoutes')();
// const regR = require('./src/routes/registerRoute')()

const crypto = require('crypto');
const key = crypto.randomBytes(32).toString('hex');
console.log("key ",key);


// app.use('/api', regR)
app.use('/', authRoutes)
app.use('/', businessRoutes)
app.use('/', adminRoutes)

// app.use('/api', organizationRoutes)



app.use(errorMiddleware)

// app.get('/', (req, res) => {
//   res.send({message: 'hello world'});
// });
// process.on('uncaughtException', (err) => {
//   console.error('Uncaught exception', err);
//   // Do any cleanup you need to do here
//   process.exit(1); // It's important to exit the process here
// });

// process.on('unhandledRejection', (reason, promise) => {
//   console.error('Unhandled promise rejection at:', promise, 'reason:', reason);
//   // Do any cleanup you need to do here
//   process.exit(1); // It's important to exit the process here
// });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})