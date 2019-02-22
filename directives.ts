import { directive } from './directives/directive';
import { directive2 } from './directives/directive2';
import * as angular from 'angular';

angular.module('directives', [])
    .directive('directive', directive)
    .directive('directive2', directive2);