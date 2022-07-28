import express from 'express';
import { Request, Response } from 'express';
import Router from './routes/index'

const app = express(),
      cors = require('cors'),
      bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use('/', Router);

app.listen(4000, () => {
  console.log('Application started on port 4000!');
});
