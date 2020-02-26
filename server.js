const express = require("express");

const connectDB = require("./config/db");
const authRoute = require("./routes/api/auth");
const usersRoute = require("./routes/api/users");
const postsRoute = require("./routes/api/posts");
const profileRoute = require("./routes/api/profile");

//Initialize express server
const app = express();

//Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;

//Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
    res.send("Test");
});

//Define Routes
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/profile", profileRoute);
app.use("/api/auth", authRoute);

//Launch server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
