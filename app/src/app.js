const express = require("express");
const cors = require('cors');
const apiRouter = require('./routes/index');
const { env, port, host, db, apiurl } = require('./config/configs');
const swagger = require('./swagger');

const app = express();
app.use(cors());
app.use (express.json());

swagger(app);

// default
app.get('/', (req, res) => (
  res.status(200).json({ message: 'Default api response!!' })
));

// Routes
app.use(apiurl, apiRouter);



app.listen(port, host, () => {
  console.log(`Example app listening on ${host} : ${port}!`);
})