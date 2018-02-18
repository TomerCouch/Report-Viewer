// Load the custom app ES6 modules

import ReportManager from 'src/reports/services/ReportManager';
import ReportMocksService from 'src/reports/services/ReportMocksService';

import ReportClass from 'src/reports/services/Report';

import ReportsList from 'src/reports/components/list/ReportsList';
import ReportDetails from 'src/reports/components/details/ReportDetails';
import ReportsTable from 'src/reports/components/table/ReportsTable';

// Define the Angular 'Reports' module
export default angular
    .module("reports", ['ngMaterial', 'smart-table'])

    .component(ReportsList.name, ReportsList.config)
    .component(ReportDetails.name, ReportDetails.config)
    .component(ReportsTable.name, ReportsTable.config)

    .service("Report", () => ReportClass)
    .service("ReportManager", ReportManager)
    .service("ReportMocksManager", ReportMocksService);