import moment from 'moment';

/**
 * Object Model to parse the report data. ('Class-like' for Report)
 */
class Report {
    constructor(documentInfo) {
        Object.assign(this, {
            reportType: documentInfo.document_type,
            reportNumber: documentInfo.document_number,
            amount: documentInfo.amount,
            customerID: documentInfo.customer_id
        });

        this._createdDate = Report.formatDate(documentInfo);
    }

    get reportNumber() {
        return this._reportNumber;
    }

    set reportNumber(newValue) {
        let newReportNumber = parseInt(newValue);

        if (angular.isNumber(newReportNumber)) {
            this._reportNumber = newReportNumber;
        }
    }

    get reportType() {
        return this._reportType;
    }

    set reportType(newValue) {
        let newReportType = parseInt(newValue);

        if (angular.isNumber(newReportType)) {
            this._reportType = newReportType;
        }
    }

    get createdDate() {
        return this._createdDate;
    }

    get amount() {
        return this._amount;
    }

    set amount(newValue) {
        let newAmount = parseInt(newValue);

        if (angular.isNumber(newAmount)) {
            this._amount = newAmount;
        }
    }

    get customerID() {
        return this._customerID;
    }

    set customerID(newValue) {
        let newCustomerID = parseInt(newValue);

        if (angular.isNumber(newCustomerID)) {
            this._customerID = newCustomerID;
        }
    }

    // It uses moment.js for combining the dateTime info into a specific format.
    static formatDate(documentInfo) {
        let m = moment;
        let {document_date: date, document_time: time} = documentInfo;

        let dateString = date.concat(" ", time);
        let dateFormat = 'DD/MM/YYYY HH:mm:ss';

        let dateTime = m(dateString, dateFormat, true);
        return dateTime.isValid() ? dateTime.format(dateFormat) : '';
    }
}

export default Report;

