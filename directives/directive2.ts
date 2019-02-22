interface ICustomScope extends angular.IScope
{
    startOperation: (operation: string) => void;
    agentOperation: string;
}

export function directive2()
{
    return {
        restrict: 'E',
        link: function (scope: ICustomScope)
        {

            scope.startOperation = startOperation;

            function startOperation(operation: string)
            {
                scope.agentOperation = operation;
            }
        }
    };
}