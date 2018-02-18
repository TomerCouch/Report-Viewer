// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-smart-table';

import AppController from 'src/AppController';
import Reports from 'src/reports/index';
import moment from 'moment';

export default angular.module('reports-viewer', ['ngMaterial', 'smart-table', Reports.name])
    .config(($mdIconProvider, $mdThemingProvider, $mdDateLocaleProvider) => {
        // Register the user `avatar` icons
        $mdIconProvider
            .defaultIconSet("./assets/svg/avatars.svg", 128)
            .icon("menu", "./assets/svg/menu.svg", 24)
            .icon("swap", "./assets/svg/swap.svg", 24)
            .icon("close", "./assets/svg/close.svg", 24)
            .icon("close_black", "./assets/svg/close_black.svg", 24)
            .icon("refresh", "./assets/svg/refresh.svg", 24)
            .icon("list_view", "./assets/svg/list_view.svg", 24)
            .icon("table_view", "./assets/svg/table_view.svg", 24)
            .icon("arrow_up", "./assets/svg/arrow_up.svg", 24)
            .icon("arrow_down", "./assets/svg/arrow_down.svg", 24)
            .icon("share", "./assets/svg/share.svg", 24)
            .icon("view_reports", "./assets/svg/gavel.svg", 24)
            .icon("google_plus", "./assets/svg/google_plus.svg", 24)
            .icon("hangouts", "./assets/svg/hangouts.svg", 24)
            .icon("twitter", "./assets/svg/twitter.svg", 24)
            .icon("phone", "./assets/svg/phone.svg", 24);

        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');

        $mdDateLocaleProvider.parseDate = (dateString) => {
            let m = moment(dateString, 'DD/MM/YYYY', true);
            return m.isValid() ? m.toDate() : new Date(NaN);
        };
        $mdDateLocaleProvider.formatDate = (date) => {
            let m = moment(date);
            return m.isValid() ? m.format('DD/MM/YYYY') : '';
        };
    })
    .controller('AppController', AppController);
