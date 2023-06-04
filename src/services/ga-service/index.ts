import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { logger } from '../../utils';

export class GAService {
  constructor() {}

  private _client: BetaAnalyticsDataClient = new BetaAnalyticsDataClient();

  public async getReport() {
    const [response] = await this._client.runReport({
      property: `properties/${process.env.GA4_PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: '2022-03-31',
          endDate: 'today',
        },
      ],
      dimensions: [
        {
          name: 'pageTitle',
        },
        {
          name: 'fullPageUrl',
        },
      ],
      metrics: [
        {
          name: 'screenPageViews',
        },
      ],
      limit: 50,
      orderBys: [
        {
          desc: true,
          metric: {
            metricName: 'screenPageViews',
          },
        },
      ],
    });

    logger.info(response);

    return response;
  }
}
