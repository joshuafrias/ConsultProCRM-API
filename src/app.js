import express from 'express';
import morgan from 'morgan';
import entitiesRoutes from './routes/entities.routes.js';
import functionsRoutes from './routes/functions.routes.js';
import { requireApiKey } from './middleware/api-key.js';
import { requireTenant } from './middleware/tenant.js';


const app = express();

app.use(express.json());
app.use(morgan('dev'));

// ✅ Health stays public
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// ✅ Protect all API routes
app.use('/api/v1', requireApiKey, requireTenant, entitiesRoutes);
app.use('/api/v1', requireApiKey, requireTenant, functionsRoutes);

export default app;
