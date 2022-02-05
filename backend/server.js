const express = require('express');
const connectDB = require('./config/db');
const env = require('dotenv');

env.config();
connectDB();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
