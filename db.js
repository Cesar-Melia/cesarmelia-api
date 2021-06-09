const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017/cesar-melia-db";

const connect = () => {
    mongoose
        .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((res) => {
            console.log("Connected to the database");
        })
        .catch((error) => {
            console.log("A problem occurred while connecting to the database", error);
        });
};

module.exports = {
    DB_URL,
    connect,
};
