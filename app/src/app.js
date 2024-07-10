const express = require("express");
const cors = require('cors');
const apiRouter = require('./routes/index');
const { env, port, host } = require('./config/configs');

const app = express();
app.use(cors())
app.use (express.json())

// default
app.get('/', (req, res) => (
  res.status(200).json({ message: 'Default api response!!' })
));

// Routes
app.use('/api/v1', apiRouter)

app.listen(port, host, () => {
  console.log(`Example app listening on ${host} : ${port}!`);
})