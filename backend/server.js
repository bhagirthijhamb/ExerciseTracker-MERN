const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./utils/db');

dotenv.config();  
connectDB();

// App setup
const app = express();
app.use(express.json());
app.use(morgan('dev'));

// require('./routes/userRoutes')(app);
// require('./routes/exerciseRoutes')(app);

// app.use(errorHandlingMiddleware.notFound);
// app.use(errorHandlingMiddleware.errorHandler);

// Server setup
const PORT = process.env.PORT || 3090;
app.listen(PORT, console.log(`Server listening on port ${PORT}`));
console.log('Server running on:', PORT);