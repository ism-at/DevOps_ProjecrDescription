import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Running on frontend');
});

export default app;