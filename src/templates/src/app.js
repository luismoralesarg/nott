const CRUD = require('easy-express-crud-generator');
const express = require('express');
const mongoose = require('mongoose');
const Router = express.Router();
const errorHandler = require('./middleware/error')
const cors = require('cors');
const morgan = require('morgan');
const app = express();


// Database
const dbuser = process.env.DBUSER || 'luismo';
const dbpassword = process.env.DBPASSWORD || 'TKF22Y5SoTwtKiKP';
const dbhost = process.env.DBHOST || 'cluster0.oe1a9.mongodb.net';
const dbname = process.env.DBNAME || 'example-api-database';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(`mongodb+srv://${dbuser}:${dbpassword}@${dbhost}/${dbname}?retryWrites=true&w=majority`, (err) => {
if (err) throw err;
console.log('[DB Connection] OK')
});
mongoose.Promise = global.Promise;

// Cors
app.use(cors());
// Logs
app.use(morgan('combined'));
app.use(express.json());
// Custom error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

/*model-list*/

app.use(Router);

app.listen(PORT, () => {
    console.log(`[CLIENT API] Running http://localhost:${PORT}`)
});
