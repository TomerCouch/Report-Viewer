/**
 * Reports MockData Service
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
class ReportMocksService {
    constructor($q, Report) {
        Object.assign(this, {
            $q,
            Report
        });

        this.reportData = [
            {
                "document_type": 1,
                "document_number": 2809,
                "document_date": "12\/12\/2016",
                "document_time": "12:23:18",
                "amount": 21.05,
                "amount_exempt": 0.00,
                "customer_id": 68,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 1,
                "document_number": 2824,
                "document_date": "12\/12\/2016",
                "document_time": "20:30:51",
                "amount": 21.00,
                "amount_exempt": 0.00,
                "customer_id": 68,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 1,
                "document_number": 2825,
                "document_date": "12\/12\/2016",
                "document_time": "20:32:12",
                "amount": 21.00,
                "amount_exempt": 0.00,
                "customer_id": 68,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 43,
                "document_date": "12\/12\/2016",
                "document_time": "11:45:50",
                "amount": 110.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 44,
                "document_date": "12\/12\/2016",
                "document_time": "11:47:26",
                "amount": 110.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 45,
                "document_date": "12\/12\/2016",
                "document_time": "11:47:49",
                "amount": 110.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 46,
                "document_date": "12\/12\/2016",
                "document_time": "11:49:26",
                "amount": 110.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 47,
                "document_date": "12\/12\/2016",
                "document_time": "11:50:30",
                "amount": 110.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 48,
                "document_date": "12\/12\/2016",
                "document_time": "11:50:39",
                "amount": 110.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 49,
                "document_date": "12\/12\/2016",
                "document_time": "11:52:03",
                "amount": 110.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 50,
                "document_date": "12\/12\/2016",
                "document_time": "11:52:18",
                "amount": 110.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 51,
                "document_date": "12\/12\/2016",
                "document_time": "11:52:27",
                "amount": 110.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 52,
                "document_date": "12\/12\/2016",
                "document_time": "12:09:09",
                "amount": 110.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 53,
                "document_date": "12\/12\/2016",
                "document_time": "12:10:05",
                "amount": 110.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 54,
                "document_date": "12\/12\/2016",
                "document_time": "12:10:49",
                "amount": 110.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 55,
                "document_date": "12\/12\/2016",
                "document_time": "12:11:30",
                "amount": 110.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 56,
                "document_date": "12\/12\/2016",
                "document_time": "12:13:34",
                "amount": 110.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 57,
                "document_date": "12\/12\/2016",
                "document_time": "12:13:34",
                "amount": 110.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 58,
                "document_date": "12\/12\/2016",
                "document_time": "12:26:29",
                "amount": 110.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 59,
                "document_date": "12\/12\/2016",
                "document_time": "12:26:29",
                "amount": 110.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 60,
                "document_date": "12\/12\/2016",
                "document_time": "12:32:48",
                "amount": 110.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 61,
                "document_date": "12\/12\/2016",
                "document_time": "12:35:48",
                "amount": 110.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 62,
                "document_date": "12\/12\/2016",
                "document_time": "12:35:48",
                "amount": 110.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 63,
                "document_date": "12\/12\/2016",
                "document_time": "12:42:18",
                "amount": 110.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 64,
                "document_date": "12\/12\/2016",
                "document_time": "12:48:56",
                "amount": 110.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 65,
                "document_date": "12\/12\/2016",
                "document_time": "12:48:56",
                "amount": 110.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 66,
                "document_date": "12\/12\/2016",
                "document_time": "14:47:02",
                "amount": 110.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 67,
                "document_date": "12\/12\/2016",
                "document_time": "14:47:02",
                "amount": 110.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 1309,
                "document_date": "12\/12\/2016",
                "document_time": "00:04:20",
                "amount": 2.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 1310,
                "document_date": "12\/12\/2016",
                "document_time": "00:09:41",
                "amount": 2.00,
                "amount_exempt": 0.00,
                "customer_id": 0,
                "agent_id": 0,
                "is_cancelled": false
            },
            {
                "document_type": 2,
                "document_number": 1311,
                "document_date": "12\/12\/2016",
                "document_time": "00:10:33",
                "amount": 2.00,
                "amount_exempt": 0.00,
                "customer_id": 68,
                "agent_id": 0,
                "is_cancelled": false
            }
        ];
    }

    loadAllReports() {
        // Simulate async nature of real remote calls
        return this.$q.when(this.reportData).then((reports) => this.fetchReports(reports));
    }

    fetchReports(reports) {
        if (reports) {
            this.reports = reports.map(report => new this.Report(report));
        }

        return this.reports;
    }
}

export default ['$q', 'Report', ReportMocksService];

