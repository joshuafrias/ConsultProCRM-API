import express from 'express';
import morgan from 'morgan';
import entitiesRoutes from './routes/entities.routes.js';
import functionsRoutes from './routes/functions.routes.js';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1', entitiesRoutes);
app.use('/api/v1', functionsRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

export default app;