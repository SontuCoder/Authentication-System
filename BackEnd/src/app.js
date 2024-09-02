const express = require("express");
const signupRouter = require("./routes/signup");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.Port || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use("/user", signupRouter);

app.post('/user/signup', (req, res) => {
    const userData = req.body;
    res.json({ message: 'User signup successful!' });
});


app.listen(PORT, ()=>{
    console.log(`Server is running on: http://localhost:${PORT}`);
})