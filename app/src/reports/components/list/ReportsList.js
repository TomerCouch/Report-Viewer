export default {
    name: 'reportsList',
    config: {
        bindings: {reports: '<', selected: '<', showDetails: '&onSelected', orderReversed: '<', filterBy: '<'},
        templateUrl: 'src/reports/components/list/ReportsList.html'
    }
};
