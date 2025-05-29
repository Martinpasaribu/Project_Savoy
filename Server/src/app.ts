import express from 'express';
import LeadRoutes from './routes/lead_routes';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Server Savoy!');
});

app.use('/api/v1/lead', LeadRoutes);

export default app;
