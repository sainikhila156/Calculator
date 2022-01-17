angular.module("myapp", [])

    .controller("HelloController", function ($scope) {

        $scope.helloTo = {};
        $scope.helloTo.title = "Kotheyyyy";
        $scope.names = ["Home", "Work", "Telephone", "Mobile"];
        $scope.selectedName = "Mobile";
        $scope.emailRequired = false;
        $scope.Result = "";
        $scope.Answer = 0;
        $scope.myEval = function (Result) {
            $scope.Answer = eval(Result)

        }
        $scope.backSpace = function () {
            const last = $scope.Result.length

            $scope.Result = $scope.Result.substring(0, last - 1);
        }
    });