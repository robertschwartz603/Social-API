const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

//mongo connection protocol:---------
const {
    connect,
    connection
} = require('mongoose');

const connectionString =
    process.env.MONGODB_URI || 'mongodb://localhost:27017/studentsDB';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//mongoose debug and loggers
mongoose.set('debug', true);
//--------------------------
module.exports = connection;
//------------------------------------

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`API server running on http://localhost:${PORT}/!`);
});