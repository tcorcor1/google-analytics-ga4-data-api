import express from 'express';
import { googleAnalyticsRouter } from './router';
import { Config, logger } from './utils';

const app = express();

Config.init();

app.use(express.json());

app.use('/api', googleAnalyticsRouter);

app.listen(process.env.PORT, () => {
  logger.info(`Server is running on port ${process.env.PORT}`);
});
