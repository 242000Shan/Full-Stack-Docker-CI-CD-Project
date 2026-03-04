const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);

// Retry connection
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://mongo:27017/mydb");
        console.log("MongoDB Connected");
    } catch (err) {
        console.log("MongoDB not ready, retrying...");
        setTimeout(connectDB, 5000);
    }
};

connectDB();

const userSchema = new mongoose.Schema({
    name: String
});

const User = mongoose.model("User", userSchema);

app.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.post("/users", async (req, res) => {
    const newUser = new User({ name: req.body.name });
    await newUser.save();
    res.json({ message: "User added" });
});

app.listen(5000, "0.0.0.0", () => {
    console.log("Server running on port 5000");
});
