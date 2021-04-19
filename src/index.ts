import { app } from './app';

const startServer = async () => {
  process.env.API_KEY = 'ca099968a7cf832e3e423c22fee9dfaf';
  app.listen(5555, () => {
    console.log('Weather app is listening on port 5555!');
  });
};

startServer();
