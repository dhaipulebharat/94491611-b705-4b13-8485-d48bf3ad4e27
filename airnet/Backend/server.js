const express = require('express');
const app = express();
const port = 8080;

//app.use('/static', express.static('public'))
app.use(express.static('public'))
app.listen(port, () => console.log('listening on port ${port}!'));
