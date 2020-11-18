const express = require('express');
const app = express();
const dbConnection = require('./service/database');
const port = 3000;
const bodyParser = require('body-parser');
const taskRouter = require('./routes/task.route');

app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json());

dbConnection.connection();

app.use('/', taskRouter);

app.listen(port, () => 
    console.log(`Server listening on port ${port}`)
);
