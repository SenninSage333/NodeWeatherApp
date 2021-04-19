import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cors from 'cors';
import { PageNotFoundError } from './errors/pageNotFoundError';
import { errorHandler } from './middlewares/errorHandler';
import { GetWeatherRouter } from './routes/getWeather';

const app = express();

app.use(json());
app.use(cors());

app.use(GetWeatherRouter);

app.all('*', async (req, res, next) => {
  throw new PageNotFoundError();
});

app.use(errorHandler);

export { app };
