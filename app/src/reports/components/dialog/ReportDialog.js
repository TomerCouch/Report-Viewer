import moment from 'moment';

/**
 * Controller for the user's request to see reports.
 */
export default class ReportDialogController {
    constructor($mdDialog) {
        Object.assign(this, {
            $mdDialog
        });
    }

    hide() {
        this.$mdDialog.hide();
    }

    cancel() {
        this.$mdDialog.cancel();
    }

    answer(answer) {
        this.$mdDialog.hide(answer);
    }

    // It overrides the default format of 'MM/DD/YYYY'.
    parseDate(dateString) {
        let date = new Date(dateString);
        let dateFormat = 'DD/MM/YYYY';

        let m = moment(date, dateFormat);
        return m.isValid() ? m.toDate() : new Date(NaN);
    }

    // It open the dialog with a default Report request
    $onInit() {
        this.request = {
            fromReportType: 0,
            toReportType: 3,
            fromDate: this.parseDate(Date.now()),
            toDate: this.parseDate(Date.now())
        };
    }
}
