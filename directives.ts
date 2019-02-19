import { directive } from './directives/directive';
import * as angular from 'angular';

angular.module('iService.directive', ['ui.select', 'iService.base'])
    .directive('iserviceIdPrefix', directive);