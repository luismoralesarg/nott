const mongoose = require('mongoose');

const database = () => {
    const dbuser = process.env.DBUSER || 'luismo';
    const dbpassword = process.env.DBPASSWORD || 'TKF22Y5SoTwtKiKP';
    const dbhost = process.env.DBHOST || 'cluster0.oe1a9.mongodb.net';
    const dbname = process.env.DBNAME || 'cicd';

    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);

    mongoose.connect(`mongodb+srv://${dbuser}:${dbpassword}@${dbhost}/${dbname}?retryWrites=true&w=majority`, (err) => {
    if (err) throw err;
        console.log('[DB Connection] OK')
    });
    mongoose.Promise = global.Promise;
}

exports.database = database;