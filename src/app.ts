import express from 'express';
import bodyparser from 'body-parser';
import Sentry, { Handlers } from '@sentry/node';
import cors from 'cors';

const app = express();

app.use(Handlers.requestHandler());
app.use(Handlers.errorHandler());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

Sentry.init({ dsn: process.env.SENTRY_DSN});