const mongoose = require('mongoose');
const dbUrl = "mongodb://localhost:27017/todolist";

const MongoDbConnection = async () => {
    await mongoose.connect(dbUrl, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => {
        console.log("Connected successfully!");
        
    })
    .catch(error => console.error(error.message));
}
module.exports = {connection: MongoDbConnection};