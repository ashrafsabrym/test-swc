export function DirectiveController(this: any, $scope: angular.IScope, $attrs: angular.IAttributes)
{
    this.$scope = $scope;
    this.$attrs = $attrs;
    this.action = action;

    function action()
    {}
}

DirectiveController.$inject = ['$scope', '$attrs'];

export function directive()
{
    return {
        restrict: 'A',
        scope: false,
        controller: DirectiveController
    };
}