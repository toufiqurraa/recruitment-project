import express from 'express';
import { connectDB } from './database/db';
import { errorHandler } from './middleware/errorHandler';
import orderRoutes from './routes/orderRoutes';

import { PORT } from './utils/config';

connectDB();

const app = express();
app.use(express.json());

app.get('/api/v1/recruitment', (req, res) => {
  res.json({ message: 'Server running' });
});

app.use('/api/v1', orderRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
