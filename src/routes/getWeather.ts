import axios from 'axios';
import express, { Request, Response } from 'express';
import { BadCoordinatesError } from '../errors/badCoordinatesError';
import { serializeWeather } from '../serializers/serializeWeather';

const router = express.Router();

router.get('/weather', async (req: Request, res: Response) => {
  if (!req.query.lat || !req.query.lon) {
    throw new BadCoordinatesError();
  }
  var lat = parseFloat(req.query.lat!.toString());
  var lon = parseFloat(req.query.lon!.toString());

  if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
    throw new BadCoordinatesError();
  }

  const { data } = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`
  );

  const weather = serializeWeather(data);

  res.status(200).send(weather);
});

export { router as GetWeatherRouter };
