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
//mongoose.set('debug', true);
//--------------------------
module.exports = connection;