import ReportDialogController from './reports/components/dialog/ReportDialog';

/**
 * Main App Controller for the Reports Viewer App
 * @param ReportManager- load and request reports dynamically
 * @param ReportMocksManager- same but for mocks for working off-line.
 * @param $interval- Service for refreshing reports periodically
 * @param $mdDialog, $mdSidenav- Material Design API services
 */
class AppController {
    constructor(ReportManager, ReportMocksManager, $interval, $mdSidenav, $mdDialog) {
        Object.assign(this,
            {
                ReportManager,
                ReportMocksManager,
                $mdSidenav,
                $mdDialog,
                $interval,
            });
    }

    $onInit() {
        this.selected = null;
        this.toggleViewer = false;
        this.viewerTitle = 'פירוט הדוח"ות';
        this.reports = null;
        this.isLoading = false;
        this.hasReports = false;
        this.reversedOrder = false;

        this.showReportPicker();

        this.refreshEvery(15);
    }

// *********************************
// Internal methods
// *********************************

    /**
     * Hide or Show the 'right' sideNav area
     */
    toggleList() {
        this.$mdSidenav('right').toggle();
    }

    toggleView() {
        this.toggleViewer = !this.toggleViewer;
        this.viewerTitle = this.toggleViewer ? 'טבלת הדו"חות' : 'פירוט הדו"חות';
    }

    toggleOrder() {
        this.reversedOrder = !this.reversedOrder;
    }

    /**
     * Select the current report
     * @param report - chosen report from list - by item number or actual object
     */
    selectReport(report) {
        this.selected = angular.isNumber(report) ? this.reports[report] : report;
    }


    // It opens a report dialog for requesting reports in certain ranges.
    // Then creates the user's request 'promise' for loading the specified reports.
    showReportPicker(event) {
        this.$mdDialog.show({
            controller: () => new ReportDialogController(this.$mdDialog),
            templateUrl: '/app/src/reports/components/dialog/ReportDialog.html',
            parent: angular.element(document.body),
            targetEvent: event,
            controllerAs: 'ctrl',
            clickOutsideToClose: this.reports,
            // fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
            .then((answer) => {
                let loadPromise = this.makeReportRequest(answer);
                // let loadPromise = this.ReportMocksManager.loadAllReports(); // For debugging with mocks.

                if (loadPromise) {
                    this.loadRequest = answer;
                    this.load();
                }
            });
    };

    // It handles the request promise to load the reports;
    load() {
        let loadPromise = this.makeReportRequest(this.loadRequest);

        if (loadPromise) {
            this.isLoading = true;

            loadPromise.then((reports) => {
                this.onReportsLoaded(reports);
            });
        }
    }

    // It loads the reports periodically
    refreshEvery(seconds) {
        this.$interval(() => {
            this.load();
        }, seconds * 1000);
    }

    // It handles the request made by the user for showing reports
    makeReportRequest(request) {
        let loadPromise;

        switch (request) {
            case 'weekly reports':
                loadPromise = this.ReportManager.loadRecentReports(7);
                break;
            case 'daily reports':
                loadPromise = this.ReportManager.loadRecentReports(1);
                break;

            default: // for specific request
                if (request && typeof request === 'object') {
                    loadPromise = this.ReportManager.loadReports(request);
                }
                break;
        }

        return loadPromise;
    }

    // It return reports in a certain range. without request returns all reports.
    // reportRequest- object that conatain Dates range and report types range
    onReportsLoaded(reports) {
        if (!reports) {
            return;
        }

        this.isLoading = false;
        this.reports = reports;
        this.lastUpdated = new Date(Date.now()).toLocaleString();
        this.hasReports = reports.length;

        if (this.hasReports) {
            let selected = this.ReportManager.findReport(this.selected);
            this.selectReport(selected);
        }
    }
}

export default ['ReportManager', 'ReportMocksManager', '$interval', '$mdSidenav', '$mdDialog', AppController];

