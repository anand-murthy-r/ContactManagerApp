const express = require("express");
const errorHandler = require("./middleware/errorHandler.js");
const connectDb = require("./config/dbConnection.js");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

// process module is the core module of NodeJS
const port = process.env.PORT || 5000;


app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes.js"));
app.use(errorHandler);

app.listen(port, () => {
        console.log(`Server running on port ${port}.`);
    }
);


