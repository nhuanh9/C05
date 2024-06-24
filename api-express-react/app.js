const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const userRouter = require('./router/user');
const postRouter = require('./router/post');

app.use("/users", userRouter);
app.use("/posts", postRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
