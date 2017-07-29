import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as path from 'path';

const app = express();
dotenv.load({path: '.env'});
app.set('port', (process.env.PORT || 3000));

