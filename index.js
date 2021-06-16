const express = require("express");
const connectDb = require('./config/config');
const routes = require("./routes");


const app = express();
const PORT = 3001;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//mongoDB connection
connectDb();

//routes
app.use(routes);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
