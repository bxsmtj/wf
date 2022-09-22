gsap.registerPlugin(ScrollTrigger);
const dataRaw = [
	{
		id: 1,
		description: '1: Bankruptcy in 2022 with $131M Debt',
		company_name: 'Armstrong Flooring, Inc.',
		company_ticker: 'NYSE:AFI',
		company_debt: 131.1,
		company_description: 'A manufacturer of flooring products',
		bankruptcy_date: 'May 2022',
		be_alert_date: 'March 2019',
		be_notice: 38,
		debt_alert_date: 'January 2020',
		debt_notice: 28.0,
		market_alert_date: 'May 2020',
		market_notice: 24,
		auditor_alert_date: null,
		auditor_notice: null,
		conclusion:
			"Prior to Armstrong Flooring's Chapter 11 Bankruptcy in May 2022, the b(e) Score detected a risk 38 months in advance. Since this alert, the company's financial performance deteriorated and share prices became volatile.",
		data: [
			{
				id: 1,
				date: '2018-05-24',
				score_prob: 0.27,
				debt_ebitda: 1.43,
				price_volatility: 31.52,
				short_interest: 1.53,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2018-06-24',
				score_prob: 0.28,
				debt_ebitda: 1.43,
				price_volatility: 33.66,
				short_interest: 1.87,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2018-07-24',
				score_prob: 0.28,
				debt_ebitda: 1.36,
				price_volatility: 34.15,
				short_interest: 1.51,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2018-08-24',
				score_prob: 0.27,
				debt_ebitda: 1.36,
				price_volatility: 41.08,
				short_interest: 1.87,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2018-09-24',
				score_prob: 0.28,
				debt_ebitda: 1.36,
				price_volatility: 42.06,
				short_interest: 2.14,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2018-10-24',
				score_prob: 0.28,
				debt_ebitda: 1.39,
				price_volatility: 42.48,
				short_interest: 3.07,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2018-11-24',
				score_prob: 0.32,
				debt_ebitda: 1.39,
				price_volatility: 42.26,
				short_interest: 3.69,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2018-12-24',
				score_prob: 0.32,
				debt_ebitda: 1.39,
				price_volatility: 43.85,
				short_interest: 3.12,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2019-01-24',
				score_prob: 0.35,
				debt_ebitda: 2.13,
				price_volatility: 46.27,
				short_interest: 2.97,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2019-02-24',
				score_prob: 0.35,
				debt_ebitda: 2.13,
				price_volatility: 46.46,
				short_interest: 2.86,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2019-03-24',
				score_prob: 0.45,
				debt_ebitda: 2.13,
				price_volatility: 46.99,
				short_interest: 3.0,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2019-04-24',
				score_prob: 0.4,
				debt_ebitda: 2.36,
				price_volatility: 47.18,
				short_interest: 3.17,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2019-05-24',
				score_prob: 0.32,
				debt_ebitda: 2.36,
				price_volatility: 49.63,
				short_interest: 2.02,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2019-06-24',
				score_prob: 0.31,
				debt_ebitda: 2.36,
				price_volatility: 50.41,
				short_interest: 2.15,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2019-07-24',
				score_prob: 0.38,
				debt_ebitda: 2.18,
				price_volatility: 51.42,
				short_interest: 2.68,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2019-08-24',
				score_prob: 0.38,
				debt_ebitda: 2.18,
				price_volatility: 43.85,
				short_interest: 2.92,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2019-09-24',
				score_prob: 0.38,
				debt_ebitda: 2.18,
				price_volatility: 43.46,
				short_interest: 2.39,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2019-10-24',
				score_prob: 0.38,
				debt_ebitda: 7.93,
				price_volatility: 43.04,
				short_interest: 2.13,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2019-11-24',
				score_prob: 0.45,
				debt_ebitda: 7.93,
				price_volatility: 58.47,
				short_interest: 2.1,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2019-12-24',
				score_prob: 0.45,
				debt_ebitda: 7.93,
				price_volatility: 59.32,
				short_interest: 2.17,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2020-01-24',
				score_prob: 0.45,
				debt_ebitda: 48.7,
				price_volatility: 57.9,
				short_interest: 2.39,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2020-02-24',
				score_prob: 0.45,
				debt_ebitda: 48.7,
				price_volatility: 57.97,
				short_interest: 3.58,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2020-03-24',
				score_prob: 0.48,
				debt_ebitda: 48.7,
				price_volatility: 78.18,
				short_interest: 4.82,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2020-04-24',
				score_prob: 0.47,
				debt_ebitda: 56.0,
				price_volatility: 85.57,
				short_interest: 3.21,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2020-05-24',
				score_prob: 0.48,
				debt_ebitda: 56.0,
				price_volatility: 99.88,
				short_interest: 2.87,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2020-06-24',
				score_prob: 0.47,
				debt_ebitda: 56.0,
				price_volatility: 103.23,
				short_interest: 3.5,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2020-07-24',
				score_prob: 0.61,
				debt_ebitda: null,
				price_volatility: 104.96,
				short_interest: 2.35,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2020-08-24',
				score_prob: 0.6,
				debt_ebitda: null,
				price_volatility: 106.52,
				short_interest: 1.16,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2020-09-24',
				score_prob: 0.6,
				debt_ebitda: null,
				price_volatility: 107.9,
				short_interest: 0.82,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2020-10-24',
				score_prob: 0.62,
				debt_ebitda: 10.66,
				price_volatility: 115.96,
				short_interest: 1.21,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2020-11-24',
				score_prob: 0.58,
				debt_ebitda: 10.66,
				price_volatility: 111.01,
				short_interest: 3.41,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2020-12-24',
				score_prob: 0.58,
				debt_ebitda: 10.66,
				price_volatility: 112.13,
				short_interest: 2.0,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2021-01-24',
				score_prob: 0.55,
				debt_ebitda: null,
				price_volatility: 113.02,
				short_interest: 2.17,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2021-02-24',
				score_prob: 0.56,
				debt_ebitda: null,
				price_volatility: 118.43,
				short_interest: 2.3,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2021-03-24',
				score_prob: 0.55,
				debt_ebitda: null,
				price_volatility: 115.31,
				short_interest: 1.73,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2021-04-24',
				score_prob: 0.57,
				debt_ebitda: null,
				price_volatility: 105.55,
				short_interest: 1.79,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2021-05-24',
				score_prob: 0.66,
				debt_ebitda: null,
				price_volatility: 98.04,
				short_interest: 2.42,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2021-06-24',
				score_prob: 0.71,
				debt_ebitda: null,
				price_volatility: 91.98,
				short_interest: 2.2,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2021-07-24',
				score_prob: 0.7,
				debt_ebitda: null,
				price_volatility: 94.96,
				short_interest: 2.04,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2021-08-24',
				score_prob: 0.68,
				debt_ebitda: null,
				price_volatility: 93.03,
				short_interest: 2.33,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2021-09-24',
				score_prob: 0.69,
				debt_ebitda: null,
				price_volatility: 92.01,
				short_interest: 1.48,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2021-10-24',
				score_prob: 0.69,
				debt_ebitda: null,
				price_volatility: 86.77,
				short_interest: 1.66,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2021-11-24',
				score_prob: 0.68,
				debt_ebitda: null,
				price_volatility: 78.58,
				short_interest: 1.26,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2021-12-24',
				score_prob: 0.68,
				debt_ebitda: null,
				price_volatility: 78.04,
				short_interest: 0.93,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2022-01-24',
				score_prob: 0.67,
				debt_ebitda: null,
				price_volatility: 78.16,
				short_interest: 0.65,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2022-02-24',
				score_prob: 0.67,
				debt_ebitda: null,
				price_volatility: 75.03,
				short_interest: 0.86,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2022-03-24',
				score_prob: 0.68,
				debt_ebitda: null,
				price_volatility: 61.34,
				short_interest: 0.45,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2022-04-24',
				score_prob: 0.68,
				debt_ebitda: null,
				price_volatility: 65.16,
				short_interest: 0.25,
				going_concern: 0,
			},
			{
				id: 1,
				date: '2022-05-07',
				score_prob: 0.81,
				debt_ebitda: null,
				price_volatility: 179.8,
				short_interest: 0.21,
				going_concern: 0,
			},
		],
	},
	{
		id: 2,
		description: '2: Bankruptcy in 2020 with $256M Debt',
		company_name: 'FHC Holdings Corporation',
		company_ticker: 'NASDAQ:FRAN',
		company_debt: 255.6,
		company_description: "A women's fashion retailer",
		bankruptcy_date: 'December 2020',
		be_alert_date: 'February 2019',
		be_notice: 22,
		debt_alert_date: 'June 2019',
		debt_notice: 18.0,
		market_alert_date: 'October 2019',
		market_notice: 14,
		auditor_alert_date: 'February 2020',
		auditor_notice: 10.0,
		conclusion:
			"Prior to FHC Holdings' Chapter 11 Bankruptcy in December 2020, the b(e) Score detected a risk 22 months in advance. Since this alert, the company's leverage profile worsened, market sentiment declined, and their auditor issued a going concern doubt.",
		data: [
			{
				id: 2,
				date: '2016-12-03',
				score_prob: 0.27,
				debt_ebitda: 0.0,
				price_volatility: 47.08,
				short_interest: 10.07,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2017-01-03',
				score_prob: 0.3,
				debt_ebitda: 0.0,
				price_volatility: 56.48,
				short_interest: 14.16,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2017-02-03',
				score_prob: 0.31,
				debt_ebitda: 0.0,
				price_volatility: 56.85,
				short_interest: 17.19,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2017-03-03',
				score_prob: 0.31,
				debt_ebitda: 0.0,
				price_volatility: 56.91,
				short_interest: 13.47,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2017-04-03',
				score_prob: 0.31,
				debt_ebitda: 0.0,
				price_volatility: 56.59,
				short_interest: 13.36,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2017-05-03',
				score_prob: 0.3,
				debt_ebitda: 0.0,
				price_volatility: 55.92,
				short_interest: 10.56,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2017-06-03',
				score_prob: 0.3,
				debt_ebitda: 0.0,
				price_volatility: 44.66,
				short_interest: 10.34,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2017-07-03',
				score_prob: 0.32,
				debt_ebitda: 0.0,
				price_volatility: 46.05,
				short_interest: 11.08,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2017-08-03',
				score_prob: 0.32,
				debt_ebitda: 0.0,
				price_volatility: 46.4,
				short_interest: 12.29,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2017-09-03',
				score_prob: 0.31,
				debt_ebitda: 0.0,
				price_volatility: 46.5,
				short_interest: 14.32,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2017-10-03',
				score_prob: 0.28,
				debt_ebitda: 0.0,
				price_volatility: 47.66,
				short_interest: 15.95,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2017-11-03',
				score_prob: 0.28,
				debt_ebitda: 0.0,
				price_volatility: 47.53,
				short_interest: 12.33,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2017-12-03',
				score_prob: 0.28,
				debt_ebitda: 0.0,
				price_volatility: 48.66,
				short_interest: 10.87,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2018-01-03',
				score_prob: 0.28,
				debt_ebitda: 0.0,
				price_volatility: 42.71,
				short_interest: 14.55,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2018-02-03',
				score_prob: 0.26,
				debt_ebitda: 0.0,
				price_volatility: 47.59,
				short_interest: 13.9,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2018-03-03',
				score_prob: 0.25,
				debt_ebitda: 0.0,
				price_volatility: 46.58,
				short_interest: 12.37,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2018-04-03',
				score_prob: 0.31,
				debt_ebitda: 0.0,
				price_volatility: 47.25,
				short_interest: 18.03,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2018-05-03',
				score_prob: 0.31,
				debt_ebitda: 0.0,
				price_volatility: 47.82,
				short_interest: 18.41,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2018-06-03',
				score_prob: 0.37,
				debt_ebitda: 0.0,
				price_volatility: 49.72,
				short_interest: 19.45,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2018-07-03',
				score_prob: 0.39,
				debt_ebitda: 0.0,
				price_volatility: 57.81,
				short_interest: 19.5,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2018-08-03',
				score_prob: 0.39,
				debt_ebitda: 0.0,
				price_volatility: 58.16,
				short_interest: 20.2,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2018-09-03',
				score_prob: 0.39,
				debt_ebitda: 0.0,
				price_volatility: 58.31,
				short_interest: 23.68,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2018-10-03',
				score_prob: 0.4,
				debt_ebitda: 0.0,
				price_volatility: 68.98,
				short_interest: 21.72,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2018-11-03',
				score_prob: 0.4,
				debt_ebitda: 0.0,
				price_volatility: 70.68,
				short_interest: 26.0,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2018-12-03',
				score_prob: 0.38,
				debt_ebitda: 0.0,
				price_volatility: 72.3,
				short_interest: 26.76,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2019-01-03',
				score_prob: 0.41,
				debt_ebitda: 0.0,
				price_volatility: 89.49,
				short_interest: 28.41,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2019-02-03',
				score_prob: 0.45,
				debt_ebitda: 0.84,
				price_volatility: 95.61,
				short_interest: 25.73,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2019-03-03',
				score_prob: 0.53,
				debt_ebitda: 0.84,
				price_volatility: 95.94,
				short_interest: 25.99,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2019-04-03',
				score_prob: 0.58,
				debt_ebitda: 0.84,
				price_volatility: 98.62,
				short_interest: 25.72,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2019-05-03',
				score_prob: 0.61,
				debt_ebitda: 0.84,
				price_volatility: 98.22,
				short_interest: 25.45,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2019-06-03',
				score_prob: 0.61,
				debt_ebitda: 4.05,
				price_volatility: 96.83,
				short_interest: 28.97,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2019-07-03',
				score_prob: 0.64,
				debt_ebitda: 4.05,
				price_volatility: 92.17,
				short_interest: 31.56,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2019-08-03',
				score_prob: 0.65,
				debt_ebitda: 4.0,
				price_volatility: 94.38,
				short_interest: 29.22,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2019-09-03',
				score_prob: 0.64,
				debt_ebitda: 4.0,
				price_volatility: 101.76,
				short_interest: 41.22,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2019-10-03',
				score_prob: 0.62,
				debt_ebitda: 4.0,
				price_volatility: 175.06,
				short_interest: 39.82,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2019-11-03',
				score_prob: 0.62,
				debt_ebitda: 3.8,
				price_volatility: 176.74,
				short_interest: 34.88,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2019-12-03',
				score_prob: 0.62,
				debt_ebitda: 3.8,
				price_volatility: 176.38,
				short_interest: 32.15,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2020-01-03',
				score_prob: 0.63,
				debt_ebitda: 3.8,
				price_volatility: 178.67,
				short_interest: 28.1,
				going_concern: 0,
			},
			{
				id: 2,
				date: '2020-02-03',
				score_prob: 0.63,
				debt_ebitda: 3.55,
				price_volatility: 175.59,
				short_interest: 27.6,
				going_concern: 1,
			},
			{
				id: 2,
				date: '2020-03-03',
				score_prob: 0.64,
				debt_ebitda: 3.55,
				price_volatility: 175.77,
				short_interest: 26.97,
				going_concern: 1,
			},
			{
				id: 2,
				date: '2020-04-03',
				score_prob: 0.65,
				debt_ebitda: 3.55,
				price_volatility: 183.54,
				short_interest: 23.83,
				going_concern: 1,
			},
			{
				id: 2,
				date: '2020-05-03',
				score_prob: 0.65,
				debt_ebitda: 4.92,
				price_volatility: 193.46,
				short_interest: 23.19,
				going_concern: 1,
			},
			{
				id: 2,
				date: '2020-06-03',
				score_prob: 0.65,
				debt_ebitda: 4.92,
				price_volatility: 195.51,
				short_interest: 27.28,
				going_concern: 1,
			},
			{
				id: 2,
				date: '2020-07-03',
				score_prob: 0.66,
				debt_ebitda: 4.92,
				price_volatility: 198.65,
				short_interest: 27.86,
				going_concern: 1,
			},
			{
				id: 2,
				date: '2020-08-03',
				score_prob: 0.67,
				debt_ebitda: 7.26,
				price_volatility: 197.16,
				short_interest: 29.33,
				going_concern: 1,
			},
			{
				id: 2,
				date: '2020-09-03',
				score_prob: 0.66,
				debt_ebitda: 7.26,
				price_volatility: 195.31,
				short_interest: 32.91,
				going_concern: 1,
			},
			{
				id: 2,
				date: '2020-10-03',
				score_prob: 0.66,
				debt_ebitda: 7.26,
				price_volatility: 137.71,
				short_interest: 28.27,
				going_concern: 1,
			},
			{
				id: 2,
				date: '2020-11-03',
				score_prob: 0.66,
				debt_ebitda: 7.26,
				price_volatility: 135.07,
				short_interest: 26.07,
				going_concern: 1,
			},
			{
				id: 2,
				date: '2020-12-03',
				score_prob: 0.68,
				debt_ebitda: 7.26,
				price_volatility: 137.82,
				short_interest: 19.63,
				going_concern: 1,
			},
		],
	},
	{
		id: 3,
		description: '3: Bankruptcy in 2020 with $532M Debt',
		company_name: 'Hi-Crush Inc.',
		company_ticker: 'NYSE:HCR',
		company_debt: 532.3,
		company_description: 'A proppant and logistics service provider',
		bankruptcy_date: 'July 2020',
		be_alert_date: 'August 2018',
		be_notice: 23,
		debt_alert_date: 'January 2020',
		debt_notice: 6.0,
		market_alert_date: 'March 2020',
		market_notice: 4,
		auditor_alert_date: null,
		auditor_notice: null,
		conclusion:
			"Prior to Hi-Crush's Chapter 11 Bankruptcy in July 2020, the b(e) Score detected a risk 23 months in advance. Around this time, the company's financial performance was improving. Since this alert, financial performance deteriorated again, and share prices became volatile.",
		data: [
			{
				id: 3,
				date: '2017-07-13',
				score_prob: 0.54,
				debt_ebitda: 6.98,
				price_volatility: 57.44,
				short_interest: 7.54,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2017-08-13',
				score_prob: 0.53,
				debt_ebitda: 6.98,
				price_volatility: 59.42,
				short_interest: 7.88,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2017-09-13',
				score_prob: 0.53,
				debt_ebitda: 6.98,
				price_volatility: 58.53,
				short_interest: 8.55,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2017-10-13',
				score_prob: 0.56,
				debt_ebitda: 2.87,
				price_volatility: 58.67,
				short_interest: 8.16,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2017-11-13',
				score_prob: 0.45,
				debt_ebitda: 2.87,
				price_volatility: 57.67,
				short_interest: 8.44,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2017-12-13',
				score_prob: 0.45,
				debt_ebitda: 2.87,
				price_volatility: 56.93,
				short_interest: 8.63,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2018-01-13',
				score_prob: 0.48,
				debt_ebitda: 1.62,
				price_volatility: 59.11,
				short_interest: 5.36,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2018-02-13',
				score_prob: 0.43,
				debt_ebitda: 1.62,
				price_volatility: 60.93,
				short_interest: 6.03,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2018-03-13',
				score_prob: 0.4,
				debt_ebitda: 1.62,
				price_volatility: 58.47,
				short_interest: 5.61,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2018-04-13',
				score_prob: 0.41,
				debt_ebitda: 1.05,
				price_volatility: 56.78,
				short_interest: 8.61,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2018-05-13',
				score_prob: 0.38,
				debt_ebitda: 1.05,
				price_volatility: 54.39,
				short_interest: 7.9,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2018-06-13',
				score_prob: 0.38,
				debt_ebitda: 1.05,
				price_volatility: 53.19,
				short_interest: 6.92,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2018-07-13',
				score_prob: 0.38,
				debt_ebitda: 0.82,
				price_volatility: 47.65,
				short_interest: 7.87,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2018-08-13',
				score_prob: 0.54,
				debt_ebitda: 0.82,
				price_volatility: 58.1,
				short_interest: 9.96,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2018-09-13',
				score_prob: 0.54,
				debt_ebitda: 0.82,
				price_volatility: 56.59,
				short_interest: 12.47,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2018-10-13',
				score_prob: 0.51,
				debt_ebitda: 1.75,
				price_volatility: 55.74,
				short_interest: 12.39,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2018-11-13',
				score_prob: 0.51,
				debt_ebitda: 1.75,
				price_volatility: 60.91,
				short_interest: 11.82,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2018-12-13',
				score_prob: 0.51,
				debt_ebitda: 1.75,
				price_volatility: 65.19,
				short_interest: 9.18,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2019-01-13',
				score_prob: 0.5,
				debt_ebitda: 2.05,
				price_volatility: 73.81,
				short_interest: 8.3,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2019-02-13',
				score_prob: 0.52,
				debt_ebitda: 2.05,
				price_volatility: 73.86,
				short_interest: 7.35,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2019-03-13',
				score_prob: 0.5,
				debt_ebitda: 2.05,
				price_volatility: 72.93,
				short_interest: 7.8,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2019-04-13',
				score_prob: 0.51,
				debt_ebitda: 2.61,
				price_volatility: 74.25,
				short_interest: 7.04,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2019-05-13',
				score_prob: 0.44,
				debt_ebitda: 2.61,
				price_volatility: 78.32,
				short_interest: 5.72,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2019-06-13',
				score_prob: 0.53,
				debt_ebitda: 2.61,
				price_volatility: 80.06,
				short_interest: 6.78,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2019-07-13',
				score_prob: 0.5,
				debt_ebitda: 3.53,
				price_volatility: 93.84,
				short_interest: 8.41,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2019-08-13',
				score_prob: 0.51,
				debt_ebitda: 3.53,
				price_volatility: 87.51,
				short_interest: 7.4,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2019-09-13',
				score_prob: 0.5,
				debt_ebitda: 3.53,
				price_volatility: 96.41,
				short_interest: 7.12,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2019-10-13',
				score_prob: 0.47,
				debt_ebitda: 4.5,
				price_volatility: 97.44,
				short_interest: 7.68,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2019-11-13',
				score_prob: 0.5,
				debt_ebitda: 4.5,
				price_volatility: 97.8,
				short_interest: 7.98,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2019-12-13',
				score_prob: 0.53,
				debt_ebitda: 4.5,
				price_volatility: 97.99,
				short_interest: 9.44,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2020-01-13',
				score_prob: 0.55,
				debt_ebitda: 5.06,
				price_volatility: 96.01,
				short_interest: 10.15,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2020-02-13',
				score_prob: 0.57,
				debt_ebitda: 5.06,
				price_volatility: 96.37,
				short_interest: 8.94,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2020-03-13',
				score_prob: 0.53,
				debt_ebitda: 5.06,
				price_volatility: 105.48,
				short_interest: 7.82,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2020-04-13',
				score_prob: 0.54,
				debt_ebitda: 5.89,
				price_volatility: 103.69,
				short_interest: 8.28,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2020-05-13',
				score_prob: 0.53,
				debt_ebitda: 5.89,
				price_volatility: 107.07,
				short_interest: 7.82,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2020-06-13',
				score_prob: 0.53,
				debt_ebitda: 5.89,
				price_volatility: 109.49,
				short_interest: 7.49,
				going_concern: 0,
			},
			{
				id: 3,
				date: '2020-07-13',
				score_prob: 0.52,
				debt_ebitda: 8.93,
				price_volatility: 123.37,
				short_interest: 5.66,
				going_concern: 0,
			},
		],
	},
	{
		id: 4,
		description: '4: Bankruptcy in 2019 with $380M Debt',
		company_name: 'Celadon Group, Inc.',
		company_ticker: 'NYSE:CGIP',
		company_debt: 380.5,
		company_description: 'A truckload shipping service provider',
		bankruptcy_date: 'December 2019',
		be_alert_date: 'February 2017',
		be_notice: 34,
		debt_alert_date: null,
		debt_notice: null,
		market_alert_date: 'May 2017',
		market_notice: 31,
		auditor_alert_date: null,
		auditor_notice: null,
		conclusion:
			"Prior to Celadon Group's Chapter 11 Bankruptcy in December 2019, the b(e) Score detected a risk 34 months in advance. Since this alert, the company faced higher market volatility, due in part to fraud allegations.",
		data: [
			{
				id: 4,
				date: '2015-12-08',
				score_prob: 0.42,
				debt_ebitda: 5.0,
				price_volatility: 28.5,
				short_interest: 3.56,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2016-01-08',
				score_prob: 0.42,
				debt_ebitda: 4.37,
				price_volatility: 38.65,
				short_interest: 5.51,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2016-02-08',
				score_prob: 0.43,
				debt_ebitda: 4.37,
				price_volatility: 41.4,
				short_interest: 9.55,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2016-03-08',
				score_prob: 0.41,
				debt_ebitda: 4.37,
				price_volatility: 41.77,
				short_interest: 10.74,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2016-04-08',
				score_prob: 0.4,
				debt_ebitda: 4.46,
				price_volatility: 43.3,
				short_interest: 8.95,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2016-05-08',
				score_prob: 0.4,
				debt_ebitda: 4.46,
				price_volatility: 43.49,
				short_interest: 9.03,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2016-06-08',
				score_prob: 0.4,
				debt_ebitda: 4.46,
				price_volatility: 45.0,
				short_interest: 9.02,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2016-07-08',
				score_prob: 0.39,
				debt_ebitda: 4.12,
				price_volatility: 47.81,
				short_interest: 8.7,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2016-08-08',
				score_prob: 0.38,
				debt_ebitda: 4.12,
				price_volatility: 48.16,
				short_interest: 10.28,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2016-09-08',
				score_prob: 0.4,
				debt_ebitda: 4.12,
				price_volatility: 51.11,
				short_interest: 12.37,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2016-10-08',
				score_prob: 0.4,
				debt_ebitda: 4.61,
				price_volatility: 51.75,
				short_interest: 16.34,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2016-11-08',
				score_prob: 0.47,
				debt_ebitda: 4.61,
				price_volatility: 56.85,
				short_interest: 16.38,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2016-12-08',
				score_prob: 0.45,
				debt_ebitda: 4.61,
				price_volatility: 64.03,
				short_interest: 16.77,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2017-01-08',
				score_prob: 0.39,
				debt_ebitda: 4.56,
				price_volatility: 67.45,
				short_interest: 20.2,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2017-02-08',
				score_prob: 0.5,
				debt_ebitda: 4.56,
				price_volatility: 65.54,
				short_interest: 23.52,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2017-03-08',
				score_prob: 0.49,
				debt_ebitda: 4.56,
				price_volatility: 66.84,
				short_interest: 24.89,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2017-04-08',
				score_prob: 0.51,
				debt_ebitda: 4.56,
				price_volatility: 71.97,
				short_interest: 25.58,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2017-05-08',
				score_prob: 0.56,
				debt_ebitda: 4.56,
				price_volatility: 103.88,
				short_interest: 28.61,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2017-06-08',
				score_prob: 0.59,
				debt_ebitda: 4.56,
				price_volatility: 106.74,
				short_interest: 23.93,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2017-07-08',
				score_prob: 0.59,
				debt_ebitda: 4.56,
				price_volatility: 110.95,
				short_interest: 25.17,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2017-08-08',
				score_prob: 0.64,
				debt_ebitda: 4.56,
				price_volatility: 115.46,
				short_interest: 21.22,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2017-09-08',
				score_prob: 0.64,
				debt_ebitda: 4.56,
				price_volatility: 117.12,
				short_interest: 24.14,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2017-10-08',
				score_prob: 0.64,
				debt_ebitda: 4.56,
				price_volatility: 119.16,
				short_interest: 21.64,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2017-11-08',
				score_prob: 0.7,
				debt_ebitda: 4.56,
				price_volatility: 120.49,
				short_interest: 14.73,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2017-12-08',
				score_prob: 0.7,
				debt_ebitda: 4.56,
				price_volatility: 115.92,
				short_interest: 13.36,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2018-01-08',
				score_prob: 0.72,
				debt_ebitda: 4.56,
				price_volatility: 113.77,
				short_interest: 13.43,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2018-02-08',
				score_prob: 0.71,
				debt_ebitda: 4.56,
				price_volatility: 112.52,
				short_interest: 13.23,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2018-03-08',
				score_prob: 0.73,
				debt_ebitda: 4.56,
				price_volatility: 113.58,
				short_interest: 11.63,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2018-04-08',
				score_prob: 0.75,
				debt_ebitda: 4.56,
				price_volatility: 161.02,
				short_interest: 11.69,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2018-05-08',
				score_prob: 0.75,
				debt_ebitda: 4.56,
				price_volatility: 170.91,
				short_interest: 6.74,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2018-06-08',
				score_prob: 0.74,
				debt_ebitda: 4.56,
				price_volatility: 152.7,
				short_interest: 2.73,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2018-07-08',
				score_prob: 0.75,
				debt_ebitda: 4.56,
				price_volatility: 150.97,
				short_interest: 2.56,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2018-08-08',
				score_prob: 0.75,
				debt_ebitda: 4.56,
				price_volatility: 149.56,
				short_interest: 2.45,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2018-09-08',
				score_prob: 0.76,
				debt_ebitda: 4.56,
				price_volatility: 147.99,
				short_interest: 2.24,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2018-10-08',
				score_prob: 0.75,
				debt_ebitda: 4.56,
				price_volatility: 147.45,
				short_interest: 1.87,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2018-11-08',
				score_prob: 0.72,
				debt_ebitda: 4.56,
				price_volatility: 144.54,
				short_interest: 1.64,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2018-12-08',
				score_prob: 0.72,
				debt_ebitda: 4.56,
				price_volatility: 144.94,
				short_interest: 1.49,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2019-01-08',
				score_prob: 0.77,
				debt_ebitda: 4.56,
				price_volatility: 150.8,
				short_interest: 1.26,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2019-02-08',
				score_prob: 0.78,
				debt_ebitda: 4.56,
				price_volatility: 160.16,
				short_interest: 1.25,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2019-03-08',
				score_prob: 0.79,
				debt_ebitda: 4.56,
				price_volatility: 160.4,
				short_interest: 1.26,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2019-04-08',
				score_prob: 0.79,
				debt_ebitda: 4.56,
				price_volatility: 164.94,
				short_interest: 1.3,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2019-05-08',
				score_prob: 0.83,
				debt_ebitda: 4.56,
				price_volatility: 102.33,
				short_interest: 1.32,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2019-06-08',
				score_prob: 0.82,
				debt_ebitda: 4.56,
				price_volatility: 103.97,
				short_interest: 1.31,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2019-07-08',
				score_prob: 0.82,
				debt_ebitda: 4.56,
				price_volatility: 103.83,
				short_interest: 1.47,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2019-08-08',
				score_prob: 0.82,
				debt_ebitda: 4.56,
				price_volatility: 113.44,
				short_interest: 2.08,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2019-09-08',
				score_prob: 0.81,
				debt_ebitda: 4.56,
				price_volatility: 112.32,
				short_interest: 2.09,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2019-10-08',
				score_prob: 0.81,
				debt_ebitda: 4.56,
				price_volatility: 112.95,
				short_interest: 1.53,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2019-11-08',
				score_prob: 0.74,
				debt_ebitda: 4.56,
				price_volatility: 113.52,
				short_interest: 1.25,
				going_concern: 0,
			},
			{
				id: 4,
				date: '2019-12-08',
				score_prob: 0.75,
				debt_ebitda: 4.56,
				price_volatility: 117.88,
				short_interest: 1.24,
				going_concern: 0,
			},
		],
	},
	{
		id: 5,
		description: '5: Bankruptcy in 2018 with $1,357M Debt',
		company_name: 'Mattress Firm Holding Corp.',
		company_ticker: 'NASDAQ:MFRM',
		company_debt: 1356.6,
		company_description: 'A mattress retailer',
		bankruptcy_date: 'October 2018',
		be_alert_date: 'March 2016',
		be_notice: 31,
		debt_alert_date: 'May 2016',
		debt_notice: 29.0,
		market_alert_date: 'August 2016',
		market_notice: 26,
		auditor_alert_date: null,
		auditor_notice: null,
		conclusion:
			"Prior to Matress Firm Holding's Chapter 11 Bankruptcy in October 2018, the b(e) Score detected a risk 31 months in advance. Since this alert, the company faced higher market volatility, due in part to fraud allegations, and was delisted.",
		data: [
			{
				id: 5,
				date: '2014-11-21',
				score_prob: 0.41,
				debt_ebitda: 5.0,
				price_volatility: 33.14,
				short_interest: 7.65,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2014-12-21',
				score_prob: 0.36,
				debt_ebitda: 5.0,
				price_volatility: 36.12,
				short_interest: 7.43,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2015-01-21',
				score_prob: 0.42,
				debt_ebitda: 5.0,
				price_volatility: 34.81,
				short_interest: 8.2,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2015-02-21',
				score_prob: 0.38,
				debt_ebitda: 4.93,
				price_volatility: 34.79,
				short_interest: 9.35,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2015-03-21',
				score_prob: 0.38,
				debt_ebitda: 4.93,
				price_volatility: 35.27,
				short_interest: 10.85,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2015-04-21',
				score_prob: 0.38,
				debt_ebitda: 4.93,
				price_volatility: 35.39,
				short_interest: 12.3,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2015-05-21',
				score_prob: 0.38,
				debt_ebitda: 4.74,
				price_volatility: 35.57,
				short_interest: 11.98,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2015-06-21',
				score_prob: 0.34,
				debt_ebitda: 4.74,
				price_volatility: 35.27,
				short_interest: 13.33,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2015-07-21',
				score_prob: 0.36,
				debt_ebitda: 4.74,
				price_volatility: 35.66,
				short_interest: 13.94,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2015-08-21',
				score_prob: 0.34,
				debt_ebitda: 3.74,
				price_volatility: 32.06,
				short_interest: 15.27,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2015-09-21',
				score_prob: 0.34,
				debt_ebitda: 3.74,
				price_volatility: 38.95,
				short_interest: 15.03,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2015-10-21',
				score_prob: 0.33,
				debt_ebitda: 3.74,
				price_volatility: 39.42,
				short_interest: 11.64,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2015-11-21',
				score_prob: 0.35,
				debt_ebitda: 3.28,
				price_volatility: 43.01,
				short_interest: 11.42,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2015-12-21',
				score_prob: 0.33,
				debt_ebitda: 3.28,
				price_volatility: 41.6,
				short_interest: 12.45,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2016-01-21',
				score_prob: 0.32,
				debt_ebitda: 3.28,
				price_volatility: 41.64,
				short_interest: 16.77,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2016-02-21',
				score_prob: 0.44,
				debt_ebitda: 3.1,
				price_volatility: 43.58,
				short_interest: 18.24,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2016-03-21',
				score_prob: 0.5,
				debt_ebitda: 3.1,
				price_volatility: 45.05,
				short_interest: 17.57,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2016-04-21',
				score_prob: 0.5,
				debt_ebitda: 3.1,
				price_volatility: 45.54,
				short_interest: 16.75,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2016-05-21',
				score_prob: 0.55,
				debt_ebitda: 6.81,
				price_volatility: 47.86,
				short_interest: 16.69,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2016-06-21',
				score_prob: 0.51,
				debt_ebitda: 6.81,
				price_volatility: 50.05,
				short_interest: 16.35,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2016-07-21',
				score_prob: 0.54,
				debt_ebitda: 6.81,
				price_volatility: 49.84,
				short_interest: 19.42,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2016-08-21',
				score_prob: 0.55,
				debt_ebitda: 5.79,
				price_volatility: 91.54,
				short_interest: 16.8,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2016-09-21',
				score_prob: 0.58,
				debt_ebitda: 5.79,
				price_volatility: 87.98,
				short_interest: 0.0,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2016-10-21',
				score_prob: 0.57,
				debt_ebitda: 5.79,
				price_volatility: 87.98,
				short_interest: 0.0,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2016-11-21',
				score_prob: 0.52,
				debt_ebitda: 5.79,
				price_volatility: 87.98,
				short_interest: 0.0,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2016-12-21',
				score_prob: 0.53,
				debt_ebitda: 5.79,
				price_volatility: 87.98,
				short_interest: 0.0,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2017-01-21',
				score_prob: 0.51,
				debt_ebitda: 5.79,
				price_volatility: 87.98,
				short_interest: 0.0,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2017-02-21',
				score_prob: 0.56,
				debt_ebitda: 5.79,
				price_volatility: 87.98,
				short_interest: 0.0,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2017-03-21',
				score_prob: 0.57,
				debt_ebitda: 5.79,
				price_volatility: 0.0,
				short_interest: 0.0,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2017-04-21',
				score_prob: 0.59,
				debt_ebitda: 5.79,
				price_volatility: 0.0,
				short_interest: 0.0,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2017-05-21',
				score_prob: 0.57,
				debt_ebitda: 5.79,
				price_volatility: 0.0,
				short_interest: 0.0,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2017-06-21',
				score_prob: 0.6,
				debt_ebitda: 5.79,
				price_volatility: 0.0,
				short_interest: 0.0,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2017-07-21',
				score_prob: 0.59,
				debt_ebitda: 5.79,
				price_volatility: 0.0,
				short_interest: 0.0,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2017-08-21',
				score_prob: 0.59,
				debt_ebitda: 5.79,
				price_volatility: 0.0,
				short_interest: 0.0,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2017-09-21',
				score_prob: 0.58,
				debt_ebitda: 5.79,
				price_volatility: 0.0,
				short_interest: 0.0,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2017-10-21',
				score_prob: 0.59,
				debt_ebitda: 5.79,
				price_volatility: 0.0,
				short_interest: 0.0,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2017-11-21',
				score_prob: 0.57,
				debt_ebitda: 5.79,
				price_volatility: 0.0,
				short_interest: 0.0,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2017-12-21',
				score_prob: 0.55,
				debt_ebitda: 5.79,
				price_volatility: 0.0,
				short_interest: 0.0,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2018-01-21',
				score_prob: 0.57,
				debt_ebitda: 5.79,
				price_volatility: 0.0,
				short_interest: 0.0,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2018-02-21',
				score_prob: 0.62,
				debt_ebitda: 5.79,
				price_volatility: 0.0,
				short_interest: 0.0,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2018-03-21',
				score_prob: 0.62,
				debt_ebitda: 5.79,
				price_volatility: 0.0,
				short_interest: 0.0,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2018-04-21',
				score_prob: 0.66,
				debt_ebitda: 5.79,
				price_volatility: 0.0,
				short_interest: 0.0,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2018-05-21',
				score_prob: 0.65,
				debt_ebitda: 5.79,
				price_volatility: 0.0,
				short_interest: 0.0,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2018-06-21',
				score_prob: 0.69,
				debt_ebitda: 5.79,
				price_volatility: 0.0,
				short_interest: 0.0,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2018-07-21',
				score_prob: 0.68,
				debt_ebitda: 5.79,
				price_volatility: 0.0,
				short_interest: 0.0,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2018-08-21',
				score_prob: 0.66,
				debt_ebitda: 5.79,
				price_volatility: 0.0,
				short_interest: 0.0,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2018-09-21',
				score_prob: 0.68,
				debt_ebitda: 5.79,
				price_volatility: 0.0,
				short_interest: 0.0,
				going_concern: 0,
			},
			{
				id: 5,
				date: '2018-10-21',
				score_prob: 0.74,
				debt_ebitda: 5.79,
				price_volatility: 0.0,
				short_interest: 0.0,
				going_concern: 0,
			},
		],
	},
	{
		id: 6,
		description: '6: Bankruptcy in 2015 with $842M Debt',
		company_name: 'RadioShack Corporation',
		company_ticker: 'NYSE:RSH',
		company_debt: 841.5,
		company_description: 'A consumer electronics retailer',
		bankruptcy_date: 'February 2015',
		be_alert_date: 'October 2011',
		be_notice: 40,
		debt_alert_date: 'April 2013',
		debt_notice: 22.0,
		market_alert_date: 'May 2012',
		market_notice: 34,
		auditor_alert_date: 'January 2014',
		auditor_notice: 13.0,
		conclusion:
			"Prior to RadioShack's Chapter 11 Bankruptcy in February 2015, the b(e) Score detected a risk 40 months in advance. Since this alert, the company began to restructure, but unsuccessful efforts resulted in a second alert 22 months later, followed by going concern doubts and higher market volatility.",
		data: [
			{
				id: 6,
				date: '2011-02-05',
				score_prob: 0.38,
				debt_ebitda: 1.46,
				price_volatility: 35.28,
				short_interest: 10.42,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2011-03-05',
				score_prob: 0.41,
				debt_ebitda: 1.46,
				price_volatility: 34.85,
				short_interest: 8.95,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2011-04-05',
				score_prob: 0.41,
				debt_ebitda: 0.8,
				price_volatility: 32.24,
				short_interest: 11.89,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2011-05-05',
				score_prob: 0.41,
				debt_ebitda: 0.8,
				price_volatility: 32.67,
				short_interest: 17.03,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2011-06-05',
				score_prob: 0.39,
				debt_ebitda: 0.8,
				price_volatility: 32.44,
				short_interest: 16.06,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2011-07-05',
				score_prob: 0.4,
				debt_ebitda: 1.72,
				price_volatility: 33.56,
				short_interest: 14.99,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2011-08-05',
				score_prob: 0.4,
				debt_ebitda: 1.72,
				price_volatility: 34.4,
				short_interest: 12.58,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2011-09-05',
				score_prob: 0.49,
				debt_ebitda: 1.72,
				price_volatility: 35.48,
				short_interest: 10.92,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2011-10-05',
				score_prob: 0.49,
				debt_ebitda: 1.97,
				price_volatility: 34.86,
				short_interest: 10.62,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2011-11-05',
				score_prob: 0.28,
				debt_ebitda: 1.97,
				price_volatility: 35.73,
				short_interest: 10.3,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2011-12-05',
				score_prob: 0.33,
				debt_ebitda: 1.97,
				price_volatility: 38.91,
				short_interest: 12.81,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2012-01-05',
				score_prob: 0.33,
				debt_ebitda: 2.54,
				price_volatility: 41.58,
				short_interest: 11.22,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2012-02-05',
				score_prob: 0.28,
				debt_ebitda: 2.54,
				price_volatility: 49.46,
				short_interest: 16.34,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2012-03-05',
				score_prob: 0.27,
				debt_ebitda: 2.54,
				price_volatility: 49.95,
				short_interest: 23.54,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2012-04-05',
				score_prob: 0.26,
				debt_ebitda: 3.1,
				price_volatility: 49.98,
				short_interest: 29.82,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2012-05-05',
				score_prob: 0.26,
				debt_ebitda: 3.1,
				price_volatility: 51.1,
				short_interest: 36.06,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2012-06-05',
				score_prob: 0.26,
				debt_ebitda: 3.1,
				price_volatility: 52.59,
				short_interest: 34.64,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2012-07-05',
				score_prob: 0.25,
				debt_ebitda: 4.68,
				price_volatility: 52.03,
				short_interest: 38.22,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2012-08-05',
				score_prob: 0.26,
				debt_ebitda: 4.68,
				price_volatility: 61.32,
				short_interest: 43.65,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2012-09-05',
				score_prob: 0.29,
				debt_ebitda: 4.68,
				price_volatility: 64.52,
				short_interest: 42.64,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2012-10-05',
				score_prob: 0.31,
				debt_ebitda: 8.42,
				price_volatility: 71.13,
				short_interest: 41.68,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2012-11-05',
				score_prob: 0.36,
				debt_ebitda: 8.42,
				price_volatility: 71.63,
				short_interest: 39.37,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2012-12-05',
				score_prob: 0.35,
				debt_ebitda: 8.42,
				price_volatility: 70.8,
				short_interest: 37.05,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2013-01-05',
				score_prob: 0.35,
				debt_ebitda: 11.52,
				price_volatility: 73.26,
				short_interest: 35.55,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2013-02-05',
				score_prob: 0.33,
				debt_ebitda: 11.52,
				price_volatility: 78.35,
				short_interest: 34.14,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2013-03-05',
				score_prob: 0.29,
				debt_ebitda: 11.52,
				price_volatility: 72.66,
				short_interest: 32.69,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2013-04-05',
				score_prob: 0.28,
				debt_ebitda: 67.16,
				price_volatility: 73.66,
				short_interest: 35.47,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2013-05-05',
				score_prob: 0.4,
				debt_ebitda: 67.16,
				price_volatility: 72.53,
				short_interest: 35.2,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2013-06-05',
				score_prob: 0.39,
				debt_ebitda: 67.16,
				price_volatility: 73.99,
				short_interest: 36.89,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2013-07-05',
				score_prob: 0.4,
				debt_ebitda: null,
				price_volatility: 73.15,
				short_interest: 35.06,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2013-08-05',
				score_prob: 0.5,
				debt_ebitda: null,
				price_volatility: 65.08,
				short_interest: 36.91,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2013-09-05',
				score_prob: 0.46,
				debt_ebitda: null,
				price_volatility: 61.66,
				short_interest: 38.34,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2013-10-05',
				score_prob: 0.48,
				debt_ebitda: null,
				price_volatility: 59.1,
				short_interest: 37.66,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2013-11-05',
				score_prob: 0.6,
				debt_ebitda: null,
				price_volatility: 57.03,
				short_interest: 34.74,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2013-12-05',
				score_prob: 0.59,
				debt_ebitda: null,
				price_volatility: 56.11,
				short_interest: 37.77,
				going_concern: 0,
			},
			{
				id: 6,
				date: '2014-01-05',
				score_prob: 0.66,
				debt_ebitda: null,
				price_volatility: 51.26,
				short_interest: 38.72,
				going_concern: 1,
			},
			{
				id: 6,
				date: '2014-02-05',
				score_prob: 0.63,
				debt_ebitda: null,
				price_volatility: 55.53,
				short_interest: 40.76,
				going_concern: 1,
			},
			{
				id: 6,
				date: '2014-03-05',
				score_prob: 0.65,
				debt_ebitda: null,
				price_volatility: 52.41,
				short_interest: 40.47,
				going_concern: 1,
			},
			{
				id: 6,
				date: '2014-04-05',
				score_prob: 0.67,
				debt_ebitda: null,
				price_volatility: 55.74,
				short_interest: 42.05,
				going_concern: 1,
			},
			{
				id: 6,
				date: '2014-05-05',
				score_prob: 0.69,
				debt_ebitda: null,
				price_volatility: 66.78,
				short_interest: 33.74,
				going_concern: 1,
			},
			{
				id: 6,
				date: '2014-06-05',
				score_prob: 0.69,
				debt_ebitda: null,
				price_volatility: 67.64,
				short_interest: 30.96,
				going_concern: 1,
			},
			{
				id: 6,
				date: '2014-07-05',
				score_prob: 0.69,
				debt_ebitda: null,
				price_volatility: 74.02,
				short_interest: 29.52,
				going_concern: 1,
			},
			{
				id: 6,
				date: '2014-08-05',
				score_prob: 0.73,
				debt_ebitda: null,
				price_volatility: 79.34,
				short_interest: 25.59,
				going_concern: 1,
			},
			{
				id: 6,
				date: '2014-09-05',
				score_prob: 0.69,
				debt_ebitda: null,
				price_volatility: 122.08,
				short_interest: 27.35,
				going_concern: 1,
			},
			{
				id: 6,
				date: '2014-10-05',
				score_prob: 0.72,
				debt_ebitda: null,
				price_volatility: 123.64,
				short_interest: 23.08,
				going_concern: 1,
			},
			{
				id: 6,
				date: '2014-11-05',
				score_prob: 0.74,
				debt_ebitda: null,
				price_volatility: 123.11,
				short_interest: 23.7,
				going_concern: 1,
			},
			{
				id: 6,
				date: '2014-12-05',
				score_prob: 0.74,
				debt_ebitda: null,
				price_volatility: 126.78,
				short_interest: 19.64,
				going_concern: 1,
			},
			{
				id: 6,
				date: '2015-01-05',
				score_prob: 0.74,
				debt_ebitda: null,
				price_volatility: 129.68,
				short_interest: 19.55,
				going_concern: 1,
			},
			{
				id: 6,
				date: '2015-02-05',
				score_prob: 0.77,
				debt_ebitda: null,
				price_volatility: 135.38,
				short_interest: 17.83,
				going_concern: 1,
			},
		],
	},
	{
		id: 7,
		description: '7: Bankruptcy in 2008 with $91M Debt',
		company_name: 'Syntax-Brillian Corporation',
		company_ticker: 'NASDAQ:BRLC',
		company_debt: 91.4,
		company_description: 'A manufacturer of display technologies',
		bankruptcy_date: 'July 2008',
		be_alert_date: 'January 2007',
		be_notice: 18,
		debt_alert_date: null,
		debt_notice: null,
		market_alert_date: 'March 2008',
		market_notice: 4,
		auditor_alert_date: null,
		auditor_notice: null,
		conclusion:
			"Prior to Syntax-Brillian's Chapter 11 Bankruptcy in July 2008, the b(e) Score detected a risk 18 months in advance. Around this time, the company's financial performance was improving. Since this alert, the company faced higher market volatility.",
		data: [
			{
				id: 7,
				date: '2006-12-08',
				score_prob: 0.48,
				debt_ebitda: 5.59,
				price_volatility: 74.22,
				short_interest: 11.44,
				going_concern: 0,
			},
			{
				id: 7,
				date: '2007-01-08',
				score_prob: 0.5,
				debt_ebitda: 2.78,
				price_volatility: 75.56,
				short_interest: 17.22,
				going_concern: 0,
			},
			{
				id: 7,
				date: '2007-02-08',
				score_prob: 0.5,
				debt_ebitda: 2.78,
				price_volatility: 81.76,
				short_interest: 24.51,
				going_concern: 0,
			},
			{
				id: 7,
				date: '2007-03-08',
				score_prob: 0.5,
				debt_ebitda: 2.78,
				price_volatility: 83.27,
				short_interest: 27.31,
				going_concern: 0,
			},
			{
				id: 7,
				date: '2007-04-08',
				score_prob: 0.51,
				debt_ebitda: 1.53,
				price_volatility: 80.71,
				short_interest: 26.69,
				going_concern: 0,
			},
			{
				id: 7,
				date: '2007-05-08',
				score_prob: 0.67,
				debt_ebitda: 1.53,
				price_volatility: 79.37,
				short_interest: 25.6,
				going_concern: 0,
			},
			{
				id: 7,
				date: '2007-06-08',
				score_prob: 0.68,
				debt_ebitda: 1.53,
				price_volatility: 77.36,
				short_interest: 17.23,
				going_concern: 0,
			},
			{
				id: 7,
				date: '2007-07-08',
				score_prob: 0.65,
				debt_ebitda: 1.08,
				price_volatility: 78.88,
				short_interest: 19.89,
				going_concern: 0,
			},
			{
				id: 7,
				date: '2007-08-08',
				score_prob: 0.65,
				debt_ebitda: 1.08,
				price_volatility: 69.24,
				short_interest: 26.65,
				going_concern: 0,
			},
			{
				id: 7,
				date: '2007-09-08',
				score_prob: 0.64,
				debt_ebitda: 1.08,
				price_volatility: 69.18,
				short_interest: 21.28,
				going_concern: 0,
			},
			{
				id: 7,
				date: '2007-10-08',
				score_prob: 0.68,
				debt_ebitda: 1.48,
				price_volatility: 85.25,
				short_interest: 21.01,
				going_concern: 0,
			},
			{
				id: 7,
				date: '2007-11-08',
				score_prob: 0.8,
				debt_ebitda: 1.48,
				price_volatility: 83.61,
				short_interest: 18.51,
				going_concern: 0,
			},
			{
				id: 7,
				date: '2007-12-08',
				score_prob: 0.8,
				debt_ebitda: 1.48,
				price_volatility: 81.84,
				short_interest: 17.85,
				going_concern: 0,
			},
			{
				id: 7,
				date: '2008-01-08',
				score_prob: 0.79,
				debt_ebitda: 1.48,
				price_volatility: 87.36,
				short_interest: 17.81,
				going_concern: 0,
			},
			{
				id: 7,
				date: '2008-02-08',
				score_prob: 0.79,
				debt_ebitda: 1.48,
				price_volatility: 84.34,
				short_interest: 22.11,
				going_concern: 0,
			},
			{
				id: 7,
				date: '2008-03-08',
				score_prob: 0.8,
				debt_ebitda: 1.48,
				price_volatility: 112.44,
				short_interest: 18.01,
				going_concern: 0,
			},
			{
				id: 7,
				date: '2008-04-08',
				score_prob: 0.78,
				debt_ebitda: 1.48,
				price_volatility: 115.19,
				short_interest: 18.27,
				going_concern: 0,
			},
			{
				id: 7,
				date: '2008-05-08',
				score_prob: 0.79,
				debt_ebitda: 1.48,
				price_volatility: 120.28,
				short_interest: 16.2,
				going_concern: 0,
			},
			{
				id: 7,
				date: '2008-06-08',
				score_prob: 0.8,
				debt_ebitda: 1.48,
				price_volatility: 124.01,
				short_interest: 14.9,
				going_concern: 0,
			},
			{
				id: 7,
				date: '2008-07-08',
				score_prob: 0.83,
				debt_ebitda: 1.48,
				price_volatility: 125.32,
				short_interest: 13.54,
				going_concern: 0,
			},
		],
	},
	{
		id: 8,
		description: '8: Bankruptcy in 2007 with $33M Debt',
		company_name: 'Quaker Fabric Corp.',
		company_ticker: 'NASDAQ:QFAB',
		company_debt: 33.3,
		company_description: 'A supplier of specialty fabrics',
		bankruptcy_date: 'August 2007',
		be_alert_date: 'May 2005',
		be_notice: 27,
		debt_alert_date: 'July 2005',
		debt_notice: 25.0,
		market_alert_date: 'July 2007',
		market_notice: 1,
		auditor_alert_date: 'January 2006',
		auditor_notice: 19.0,
		conclusion:
			"Prior to Quaker Fabric's Chapter 11 Bankruptcy in August 2007, the b(e) Score detected a risk 27 months in advance. Since this alert, the company faced significant leverage issues, going concern doubts, and sudden market volatility.",
		data: [
			{
				id: 8,
				date: '2004-01-16',
				score_prob: 0.36,
				debt_ebitda: 1.32,
				price_volatility: 36.88,
				short_interest: 0.26,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2004-02-16',
				score_prob: 0.36,
				debt_ebitda: 1.32,
				price_volatility: 38.19,
				short_interest: 0.13,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2004-03-16',
				score_prob: 0.09,
				debt_ebitda: 1.32,
				price_volatility: 38.26,
				short_interest: 0.1,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2004-04-16',
				score_prob: 0.11,
				debt_ebitda: 1.32,
				price_volatility: 38.13,
				short_interest: 0.13,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2004-05-16',
				score_prob: 0.12,
				debt_ebitda: 1.32,
				price_volatility: 36.98,
				short_interest: 0.25,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2004-06-16',
				score_prob: 0.12,
				debt_ebitda: 1.32,
				price_volatility: 34.93,
				short_interest: 0.51,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2004-07-16',
				score_prob: 0.15,
				debt_ebitda: 1.35,
				price_volatility: 31.75,
				short_interest: 0.73,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2004-08-16',
				score_prob: 0.19,
				debt_ebitda: 1.35,
				price_volatility: 34.08,
				short_interest: 0.65,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2004-09-16',
				score_prob: 0.19,
				debt_ebitda: 1.35,
				price_volatility: 32.96,
				short_interest: 0.81,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2004-10-16',
				score_prob: 0.16,
				debt_ebitda: 1.74,
				price_volatility: 31.89,
				short_interest: 1.02,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2004-11-16',
				score_prob: 0.25,
				debt_ebitda: 1.74,
				price_volatility: 30.71,
				short_interest: 1.07,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2004-12-16',
				score_prob: 0.25,
				debt_ebitda: 1.74,
				price_volatility: 29.75,
				short_interest: 1.27,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2005-01-16',
				score_prob: 0.2,
				debt_ebitda: 2.46,
				price_volatility: 28.25,
				short_interest: 1.28,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2005-02-16',
				score_prob: 0.2,
				debt_ebitda: 2.46,
				price_volatility: 26.07,
				short_interest: 2.48,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2005-03-16',
				score_prob: 0.33,
				debt_ebitda: 2.46,
				price_volatility: 27.41,
				short_interest: 3.95,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2005-04-16',
				score_prob: 0.35,
				debt_ebitda: 5.93,
				price_volatility: 30.23,
				short_interest: 5.76,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2005-05-16',
				score_prob: 0.48,
				debt_ebitda: 5.93,
				price_volatility: 31.14,
				short_interest: 7.32,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2005-06-16',
				score_prob: 0.61,
				debt_ebitda: 5.93,
				price_volatility: 38.54,
				short_interest: 7.82,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2005-07-16',
				score_prob: 0.61,
				debt_ebitda: 14.34,
				price_volatility: 38.88,
				short_interest: 7.46,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2005-08-16',
				score_prob: 0.64,
				debt_ebitda: 14.34,
				price_volatility: 40.81,
				short_interest: 7.21,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2005-09-16',
				score_prob: 0.64,
				debt_ebitda: 14.34,
				price_volatility: 42.6,
				short_interest: 6.63,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2005-10-16',
				score_prob: 0.64,
				debt_ebitda: 24.86,
				price_volatility: 44.22,
				short_interest: 6.11,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2005-11-16',
				score_prob: 0.65,
				debt_ebitda: 24.86,
				price_volatility: 44.92,
				short_interest: 6.22,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2005-12-16',
				score_prob: 0.65,
				debt_ebitda: 24.86,
				price_volatility: 45.02,
				short_interest: 6.87,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2006-01-16',
				score_prob: 0.65,
				debt_ebitda: 42.62,
				price_volatility: 48.5,
				short_interest: 6.83,
				going_concern: 1,
			},
			{
				id: 8,
				date: '2006-02-16',
				score_prob: 0.62,
				debt_ebitda: 42.62,
				price_volatility: 49.6,
				short_interest: 6.85,
				going_concern: 1,
			},
			{
				id: 8,
				date: '2006-03-16',
				score_prob: 0.72,
				debt_ebitda: 42.62,
				price_volatility: 49.69,
				short_interest: 7.23,
				going_concern: 1,
			},
			{
				id: 8,
				date: '2006-04-16',
				score_prob: 0.74,
				debt_ebitda: 64.43,
				price_volatility: 67.64,
				short_interest: 7.69,
				going_concern: 1,
			},
			{
				id: 8,
				date: '2006-05-16',
				score_prob: 0.74,
				debt_ebitda: 64.43,
				price_volatility: 67.99,
				short_interest: 8.46,
				going_concern: 1,
			},
			{
				id: 8,
				date: '2006-06-16',
				score_prob: 0.74,
				debt_ebitda: 64.43,
				price_volatility: 65.15,
				short_interest: 7.43,
				going_concern: 1,
			},
			{
				id: 8,
				date: '2006-07-16',
				score_prob: 0.74,
				debt_ebitda: null,
				price_volatility: 67.23,
				short_interest: 7.37,
				going_concern: 1,
			},
			{
				id: 8,
				date: '2006-08-16',
				score_prob: 0.81,
				debt_ebitda: null,
				price_volatility: 65.13,
				short_interest: 7.38,
				going_concern: 1,
			},
			{
				id: 8,
				date: '2006-09-16',
				score_prob: 0.81,
				debt_ebitda: null,
				price_volatility: 64.28,
				short_interest: 7.33,
				going_concern: 1,
			},
			{
				id: 8,
				date: '2006-10-16',
				score_prob: 0.79,
				debt_ebitda: null,
				price_volatility: 67.08,
				short_interest: 7.22,
				going_concern: 1,
			},
			{
				id: 8,
				date: '2006-11-16',
				score_prob: 0.79,
				debt_ebitda: null,
				price_volatility: 66.21,
				short_interest: 7.37,
				going_concern: 1,
			},
			{
				id: 8,
				date: '2006-12-16',
				score_prob: 0.79,
				debt_ebitda: null,
				price_volatility: 72.81,
				short_interest: 6.58,
				going_concern: 1,
			},
			{
				id: 8,
				date: '2007-01-16',
				score_prob: 0.79,
				debt_ebitda: null,
				price_volatility: 71.96,
				short_interest: 6.16,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2007-02-16',
				score_prob: 0.79,
				debt_ebitda: null,
				price_volatility: 72.4,
				short_interest: 5.94,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2007-03-16',
				score_prob: 0.79,
				debt_ebitda: null,
				price_volatility: 72.2,
				short_interest: 4.83,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2007-04-16',
				score_prob: 0.79,
				debt_ebitda: null,
				price_volatility: 54.76,
				short_interest: 5.46,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2007-05-16',
				score_prob: 0.8,
				debt_ebitda: null,
				price_volatility: 57.8,
				short_interest: 5.32,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2007-06-16',
				score_prob: 0.78,
				debt_ebitda: null,
				price_volatility: 55.96,
				short_interest: 4.07,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2007-07-16',
				score_prob: 0.78,
				debt_ebitda: null,
				price_volatility: 229.13,
				short_interest: 2.95,
				going_concern: 0,
			},
			{
				id: 8,
				date: '2007-08-16',
				score_prob: 0.84,
				debt_ebitda: null,
				price_volatility: 233.62,
				short_interest: 1.05,
				going_concern: 0,
			},
		],
	},
];

let svgMargin = { top: 24, right: 26, bottom: 16, left: 32 };
let svgWidth;
let svgHeight;
let selectedIndex = 0;
let dataCompany = dataRaw[selectedIndex].data;

function drawChart(type) {
	// type = ['be', 'debt', 'market', 'auditor']

	let value;
	let idWrapper;
	switch (type) {
		case 'be':
			value = 'score_prob';
			idWrapper = '#wrapper__chart-be';
			break;
		case 'debt':
			value = 'debt_ebitda';
			idWrapper = '#wrapper__chart-debt';
			break;
		case 'market':
			value = 'price_volatility';
			idWrapper = '#wrapper__chart-market';
			break;
		case 'auditor':
			value = 'going_concern';
			idWrapper = '#wrapper__chart-auditor';
			break;
		default:
			console.log('drawChart() Error: No type specified.');
	}

	const data = dataCompany.map((d) => ({
		date: d3.timeParse('%Y-%m-%d')(d.date),
		value: +d[value],
	}));

	let yDomainMin;
	let yDomainMax;

	let yAxisTitle;
	switch (type) {
		case 'be':
			yDomainMin = 0;
			yDomainMax = 1;
			yAxisTitle = 'b(e) Score';
			break;
		case 'debt':
			yDomainMin = 0;
			yDomainMax =
				Math.ceil(
					d3.max(data, function (d) {
						return +d.value;
					}) / 10
				) * 10;
			yAxisTitle = 'Total Debt to EBITDA';
			break;
		case 'market':
			yDomainMin = 0;
			yDomainMax =
				Math.ceil(
					d3.max(data, function (d) {
						return +d.value;
					}) / 100
				) * 100;
			yAxisTitle = 'Price Volatility';
			break;
		case 'auditor':
			yDomainMin = -0.1;
			yDomainMax = 1.1;
			yAxisTitle = 'Going Concern Doubt';
			break;
		default:
			console.log('drawChart() Error: No type specified.');
	}

	let svg = d3
		.select(idWrapper)
		.append('svg')
		.attr('width', svgWidth + svgMargin.left + svgMargin.right)
		.attr('height', svgHeight + svgMargin.top + svgMargin.bottom)
		.append('g')
		.attr(
			'transform',
			'translate(' + svgMargin.left + ',' + svgMargin.top + ')'
		);

	let xScale = d3
		.scaleTime()
		.domain(
			d3.extent(data, function (d) {
				return d.date;
			})
		)
		.range([0, svgWidth]);

	let xAxis = d3
		.axisBottom(xScale)
		.ticks(d3.timeYear, 1)
		.tickSize(-svgHeight)
		.tickPadding([8])
		.tickSizeOuter(0)
		.tickFormat(d3.timeFormat('%Y'));

	svg
		.append('g')
		.attr('transform', 'translate(0,' + svgHeight + ')')
		.call(xAxis);

	let yScale = d3
		.scaleLinear()
		.domain([yDomainMin, yDomainMax])
		.nice()
		.range([svgHeight, 0]);

	let yAxis = d3
		.axisLeft(yScale)

		.tickSize(-svgWidth)
		.tickPadding([8]);

	switch (type) {
		case 'be':
			yAxis.ticks(5).tickValues([0, 0.25, 0.5, 0.75, 1]);
			break;
		case 'auditor':
			yAxis.ticks(2).tickValues([0, 1]);
			break;
		default:
	}
	svg.append('g').call(yAxis);

	let line = d3
		.line()
		.x(function (d) {
			return xScale(d.date);
		})
		.y(function (d) {
			return yScale(d.value);
		})
		.defined(function (d) {
			return d.value !== null;
		});

	let path = svg
		.append('path')
		.attr('d', line(data))
		.attr('fill', 'none')
		.attr('stroke', '#B3B3B3')
		.attr('stroke-width', 1);

	let totalLength = path.node().getTotalLength();

	ScrollTrigger.create({
		trigger: idWrapper,
		onEnter: function () {
			path
				.attr('stroke-dasharray', totalLength + ' ' + totalLength)
				.attr('stroke-dashoffset', totalLength)
				.transition()
				.duration(1000)
				.ease(d3.easeLinear)
				.attr('stroke-dashoffset', 0);
		},
	});

	svg
		.append('text')
		.attr('text-anchor', 'start')
		.attr('x', -svgMargin.left)
		.attr('y', -svgMargin.top / 2)
		.attr('class', 'axisLabel')
		.text(yAxisTitle);

	switch (type) {
		case 'market':
			const dataSecondary = dataCompany.map((d) => ({
				date: d3.timeParse('%Y-%m-%d')(d.date),
				value: +d.short_interest,
			}));

			let yScaleSecondary = d3
				.scaleLinear()
				.domain([0, 100])
				// .nice()
				.range([svgHeight, 0]);

			let yAxisSecondary = d3
				.axisRight(yScaleSecondary)
				.tickSize(0)
				.tickPadding([4]);
			let yDomainTicks = yScale.ticks().length;
			console.log(yDomainTicks);

			let stepValue = (yDomainMax - 0) / (yDomainTicks - 1),
				tickValues = d3.range(0, yDomainMax + stepValue, stepValue);
			yAxis.ticks(yDomainTicks).tickValues(tickValues);

			svg
				.append('g')
				.attr('class', 'axisLabelSecondary')
				.attr('transform', 'translate(' + svgWidth + ', 0)')
				.call(yAxisSecondary);

			svg
				.append('text')
				.attr('text-anchor', 'end')
				.attr('x', svgWidth + svgMargin.right)
				.attr('y', -svgMargin.top / 2)
				.attr('class', 'axisLabelSecondary')
				.text('Short Interest');

			d3.line()
				.x(function (d) {
					return xScale(d.date);
				})
				.y(function (d) {
					return yScaleSecondary(d.value);
				})
				.defined(function (d) {
					return d.value !== null;
				});

			let pathSecondary = svg
				.append('path')
				.attr('d', line(dataSecondary))
				.attr('fill', 'none')
				.attr('stroke', '#808080')
				.attr('stroke-width', 1);

			let totalLengthSecondary = pathSecondary.node().getTotalLength();

			ScrollTrigger.create({
				trigger: idWrapper,
				onEnter: function () {
					pathSecondary
						.attr(
							'stroke-dasharray',
							totalLengthSecondary + ' ' + totalLengthSecondary
						)
						.attr('stroke-dashoffset', totalLengthSecondary)
						.transition()
						.duration(1000)
						.ease(d3.easeLinear)
						.attr('stroke-dashoffset', 0);
				},
			});
			break;
		default:
	}

	svg.selectAll('.tick').selectAll('text').attr('class', 'axisLabel');
	svg.selectAll('.tick').selectAll('line').attr('class', 'axisDomain');
	svg
		.selectAll('.axisLabelSecondary')
		.selectAll('text')
		.attr('class', 'axisLabelSecondary');
	svg.selectAll('.domain').remove();
}

function clearChart(type) {
	let idWrapper;
	switch (type) {
		case 'be':
			idWrapper = '#wrapper__chart-be';
			break;
		case 'debt':
			idWrapper = '#wrapper__chart-debt';
			break;
		case 'market':
			idWrapper = '#wrapper__chart-market';
			break;
		case 'auditor':
			idWrapper = '#wrapper__chart-auditor';
			break;
		default:
			console.log('clearChart() Error: No type specified.');
	}

	d3.select(idWrapper).selectAll('svg').remove();
}

$(document).ready(function () {
	//

	let elWrapper = document.getElementById('wrapper__select-cases');
	let elSelect = document.createElement('select');
	elSelect.id = 'select-cases';
	elSelect.classList.add('wide');
	elSelect.classList.add('mono');
	elSelect.classList.add('small');
	dataRaw.forEach((d, i) => {
		let elOption = document.createElement('option');
		elOption.value = i;
		elOption.innerText = d.description;
		if (i == 0) {
			elOption.setAttribute('default', '');
		}
		elSelect.appendChild(elOption);
	});
	elWrapper.appendChild(elSelect);
	$('select').niceSelect();

	//

	function formatInt(num) {
		return d3.format('.2')(num);
	}

	let elProfileName = document.getElementById('wrapper__profile-name');
	let elProfileDebt = document.getElementById('wrapper__profile-debt');
	let elProfileDescription = document.getElementById(
		'wrapper__profile-description'
	);
	let elProfileBankruptDate = document.getElementById(
		'wrapper__profile-bankruptdate'
	);
	let elProfileAlertDate = document.getElementById(
		'wrapper__profile-alertdate'
	);
	let elProfileNotice = document.getElementById('wrapper__profile-notice');
	let elProfileConclusion = document.getElementById(
		'wrapper__profile-conclusion'
	);
	let elCaptionBe = document.getElementById('wrapper__caption-be');
	let elCaptionDebt = document.getElementById('wrapper__caption-debt');
	let elCaptionMarket = document.getElementById('wrapper__caption-market');
	let elCaptionAuditor = document.getElementById('wrapper__caption-auditor');

	elProfileName.innerText =
		dataRaw[0].company_name + ' (' + dataRaw[0].company_ticker + ')';
	elProfileDebt.innerText = '$' + dataRaw[0].company_debt + 'M';
	elProfileDescription.innerText = dataRaw[0].company_description;
	elProfileBankruptDate.innerText = dataRaw[0].bankruptcy_date;
	elProfileAlertDate.innerText = dataRaw[0].be_alert_date;
	elProfileNotice.innerText = formatInt(dataRaw[0].be_notice) + ' months';
	elProfileConclusion.innerText = dataRaw[0].conclusion;
	elCaptionBe.innerText =
		'detected ' + formatInt(dataRaw[0].be_notice) + ' months';
	elCaptionDebt.innerText =
		'detected ' + formatInt(dataRaw[0].debt_notice) + ' months';
	elCaptionMarket.innerText =
		'detected ' + formatInt(dataRaw[0].market_notice) + ' months';
	function getAuditorCaption(i) {
		if (dataRaw[i].auditor_notice == null) {
			return 'not detected';
		} else {
			return 'detected ' + formatInt(dataRaw[i].auditor_notice) + ' months';
		}
	}
	elCaptionAuditor.innerText = getAuditorCaption(0);

	$('#select-cases').change(() => {
		selectedIndex = elSelect.value;
		elProfileName.innerText =
			dataRaw[selectedIndex].company_name +
			' (' +
			dataRaw[selectedIndex].company_ticker +
			')';
		elProfileDebt.innerText = '$' + dataRaw[selectedIndex].company_debt + 'M';
		elProfileDescription.innerText = dataRaw[selectedIndex].company_description;
		elProfileBankruptDate.innerText = dataRaw[selectedIndex].bankruptcy_date;
		elProfileAlertDate.innerText = dataRaw[selectedIndex].be_alert_date;
		elProfileNotice.innerText =
			formatInt(dataRaw[selectedIndex].be_notice) + ' months';
		elProfileConclusion.innerText = dataRaw[selectedIndex].conclusion;
		elCaptionBe.innerText =
			'detected ' + formatInt(dataRaw[selectedIndex].be_notice) + ' months';
		elCaptionDebt.innerText =
			'detected ' + formatInt(dataRaw[selectedIndex].debt_notice) + ' months';
		elCaptionMarket.innerText =
			'detected ' + formatInt(dataRaw[selectedIndex].market_notice) + ' months';
		elCaptionAuditor.innerText = getAuditorCaption(selectedIndex);

		clearChart('be');
		clearChart('debt');
		clearChart('market');
		clearChart('auditor');

		dataCompany = dataRaw[selectedIndex].data;
		console.log(dataCompany);

		drawChart('be');
		drawChart('debt');
		drawChart('market');
		drawChart('auditor');
	});
});

$(window).on('load', function () {
	svgWidth = $('#wrapper__chart-be').width() - svgMargin.left - svgMargin.right;
	svgHeight =
		$('#wrapper__chart-be').width() / 2 - svgMargin.top - svgMargin.bottom;

	drawChart('be');
	drawChart('debt');
	drawChart('market');
	drawChart('auditor');

	window.addEventListener('resize', () => {
		// todo
	});
});
