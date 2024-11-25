const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)


// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect('mongodb+srv://chaitustark:sXAN22E8K1EJtttL@cluster0.bpwbtja.mongodb.net/', { dbName: "finalAbba" });

app.listen(3000, () => console.log('Server running on port 3000'));
