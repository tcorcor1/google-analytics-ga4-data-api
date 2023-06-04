import express, { NextFunction, Request, Response } from 'express';
import { GAService } from '../../services/ga-service';
import { logger } from '../../utils';

export const googleAnalyticsRouter = express.Router();

googleAnalyticsRouter.get(
  '/ga',
  async (req: Request, res: Response, next: NextFunction) => {
    const gaService = new GAService();
    const report = await gaService.getReport();

    logger.info('Google Analytics report', report);

    return res.status(200).json(report);
  },
);
