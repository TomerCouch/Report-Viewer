class ReportDetailsController {
    /**
     * Controller for displaying Report details to the client
     * and mocking the sharing of the report
     *
     * @param $mdBottomSheet Material design service for bottom sheet
     * @param $log
     */
    constructor($mdBottomSheet, $log) {
        this.$mdBottomSheet = $mdBottomSheet;
        this.$log = $log;
    }

    /**
     * Show the bottom sheet
     * Selected sharing method will be displayed at the log console
     */
    share() {
        let reportSheetController = () => new ReportSheetController(this.$mdBottomSheet, this.selected);

        this.$mdBottomSheet.show({
            parent: angular.element(document.getElementById('content')),
            templateUrl: 'src/reports/components/details/ShareSheet.html',
            controller: reportSheetController,
            controllerAs: "$ctrl"
        }).then((clickedItem) => {
            if (clickedItem) {
                this.$log.debug(clickedItem.name + ' clicked!');
            }
        });
    }
}

/**
 * Bottom Sheet controller for Sharing the report
 */
class ReportSheetController {
    constructor($mdBottomSheet, report) {
        Object.assign(this, {
            $mdBottomSheet,
            report
        });
    }

    $onInit() {
        this.items = [
            {name: 'Phone', icon: 'phone', icon_url: 'assets/svg/phone.svg'},
            {name: 'Twitter', icon: 'twitter', icon_url: 'assets/svg/twitter.svg'},
            {name: 'Google+', icon: 'google_plus', icon_url: 'assets/svg/google_plus.svg'},
            {name: 'Hangout', icon: 'hangouts', icon_url: 'assets/svg/hangouts.svg'}
        ];
    }

    performAction(action) {
        this.$mdBottomSheet.hide(action);
    }

    cancel() {
        this.$mdBottomSheet.hide();
    }
}

export default {
    name: 'reportDetails',
    config: {
        bindings: {selected: '<'},
        templateUrl: 'src/reports/components/details/ReportDetails.html',
        controller: ['$mdBottomSheet', '$log', ReportDetailsController]
    }
}