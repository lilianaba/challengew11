const express = require('express');
const path = require('path');
// const api = require('./routes/index.js');
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');
// const PORT = 3001;

const app = express();

const PORT = process.env.PORT || 3001;

// Import custom middleware, "cLog"
// app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);
app.use('/',htmlRoutes);

app.use(express.static('public'));


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
