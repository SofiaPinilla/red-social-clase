const express = require("express");
const app = express();
const port = 8080;
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/users',require('./routes/users'))
app.use('/posts',require('./routes/posts'))

app.listen(port, () => console.log("Server running in port " + port));
