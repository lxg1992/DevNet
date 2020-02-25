const express = require("express");
const connectDB = require("./config/db");

//Initialize express server
const app = express();

//Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Test");
});
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
