import moment from 'moment';

/**
 * Report Manager
 * Makes remote data service call(s), validates the data
 * and parses it into Model 'Report'.
 *
 * This POST request method includes report type range and creation date range.
 * 2 ways of requesting reports:
 * Recent Report Loading: all reports from a specified day number until now.
 * Specific Report Loading: reports by user requestm, which will be validate before becoming a part of "the payload".
 *
 * In any case, the request becomes a part of the POST body payload, sent to the server.
 * Notice the formatting of the Dates!
 * Then, the data returned will be parsed to a list of Report models.
 *
 * @constructor
 */
class ReportManager {
    constructor($http, Report) {
        Object.assign(this, {
            $http,
            Report
        });

        this.reports = [];
    }

    // It validates the post body request fields
    isPayloadValid(bodyRequest) {
        if (!bodyRequest) {
            return false;
        }

        let {fromReportType, toReportType, fromDate, toDate} = bodyRequest;

        return angular.isNumber(fromReportType) &&
            angular.isNumber(toReportType) &&
            toReportType >= fromReportType &&
            this.isValidDate(fromDate) &&
            this.isValidDate(toDate);
    }

    // It loads all reports from the specified day count( limit: ~3 years back)
    // Note: assumes all reports types between 1-10
    loadRecentReports(dayCount) {
        if (dayCount > 1000) {
            return;
        }

        let widestBodyRequest = {
            fromReportType: 1,
            toReportType: 10,
            fromDate: this.getDateFrom(dayCount),
            toDate: this.getDateFrom(0)
        };

        return this.loadReports(widestBodyRequest);
    }

    // It loads reports by certain parameters:
    // from/to document type - Report types
    // from/to Dates- Report creation date ranges
    // Validating and making a POST request to the server
    // Parsing the data into Report Model
    // TODO: important note: Currently using proxy to prevent CORS error
    loadReports(bodyRequest) {
        if (!this.isPayloadValid(bodyRequest)) {
            return;
        }
        let {fromReportType = 0, toReportType = fromReportType + 1, fromDate, toDate} = bodyRequest;

        let postBodyRequest = {
            "api_token": "DECD03E5-E35C-41E8-84F7-FBA2FB483928",
            "from_document_type": fromReportType,
            "to_document_type": toReportType,
            "from_date": this.formatDate(fromDate),
            "to_date": this.formatDate(toDate)
        };

        let rivhitUrl = 'https://cors-anywhere.herokuapp.com/https://api.rivhit.co.il/online/RivhitOnlineAPI.svc/Document.List';

        let headers = {
            'Content-Type': 'application/json'
        };

        return this.$http({
            method: 'POST',
            url: rivhitUrl,
            headers,
            data: postBodyRequest
        }).then(({data: {data: {document_list: reports}}}) => this.fetchReports(reports));
    }

    fetchReports(reports) {
        if (reports) {
            this.reports = reports.map(report => new this.Report(report));
        }

        return this.reports;
    }

    isValidDate(date) {
        let m = moment(date);
        return m.isValid();
    }

    //
    // parseDate(dateString) {
    //     let m = moment(dateString, 'DD/MM/YYYY', true);
    //     return m.isValid() ? m.toDate() : new Date(NaN);
    // };


    getDateFrom(daysOld) {
        let date = new Date(Date.now());
        let dateFormat = 'DD/MM/YYYY';

        let m = moment(date, dateFormat);
        return m.subtract(daysOld, 'day').toDate();
    }

    formatDate(date) {
        let m = moment(date);
        return m.isValid() ? m.format('DD/MM/YYYY') : '';
    }
}

export default ['$http', 'Report', ReportManager];

