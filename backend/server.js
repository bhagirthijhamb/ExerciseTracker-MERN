const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./utils/db');
const errorHandlingMiddleware = require('./middlewares/errorHandleMiddleware');

console.log('__dirname', __dirname);
const dirname = __dirname + '/../';
console.log('dirname', dirname);

dotenv.config();  
connectDB();

// App setup
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// app.get('/', (req, res) => {
//   res.send('API is running');
// })

require('./routes/userRoutes')(app);
require('./routes/exerciseRoutes')(app);


if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(dirname, '/frontend/build')))
  app.get('*', (req, res) => res.sendFile(path.resolve(dirname, 'frontend', 'build', 'index.html')))
} else {
  app.get('/', (req, res) => {
    res.send('API is running');
  })
}

app.use(errorHandlingMiddleware.notFound);
app.use(errorHandlingMiddleware.errorHandler);

// Server setup
const PORT = process.env.PORT || 3090;
app.listen(PORT, console.log(`Server listening on port ${PORT}`));
console.log('Server running on:', PORT);