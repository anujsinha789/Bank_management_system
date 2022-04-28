const mongoose = require('mongoose');

const getConnection = (DB_URL) => {
    mongoose.connect(DB_URL, {
	    useNewUrlParser: true,
	    useUnifiedTopology: true,
    }).then(() => {
	    console.log("Connected to database");   
    }).catch((err) => {
	    console.log("Error connecting to the Database");
	    console.log(err);
    });
};

module.exports = getConnection;