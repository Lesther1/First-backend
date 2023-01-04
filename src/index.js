const express = require("express");
const mongoose = require("mongoose")
require("dotenv").config();
mongoose.set('strictQuery', false);
const userRoutes = require("./routes/user")

const app = express();
const port = process.env.PORT || 9000;

//midleware
app.use(express.json());
app.use('/api', userRoutes);


//routes
app.get("/", (req, res) => {
    res.send('welcome to my api')
})

//mongodb conection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log('conected to mongodb atlas'))
    .catch((error) => console.error(error))

app.listen(port, ()=> console.log('the server is conected a ', port));
