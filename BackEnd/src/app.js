const express = require("express");
const signupRouter = require("./routes/signup");
const loginRouter = require("./routes/login");
const authenticateRouter = require("./routes/authenticated");
const bodyParser = require("body-parser");
const cors = require("cors");
const {createAdminAccount} = require("./scripts/admin");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

createAdminAccount();



app.use("/user", signupRouter);
app.use("/auth", loginRouter);
app.use("/api",authenticateRouter);


app.post('/user/signup', (req, res) => {
    const userData = req.body;
    res.json({ message: 'User signup successful!' });
});


app.listen(PORT, ()=>{
    console.log(`Server is running on: http://localhost:${PORT}`);
})