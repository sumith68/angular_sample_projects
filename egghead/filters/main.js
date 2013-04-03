var myApp = angular.module('myApp', ['filter_check'])


// angular.module('filters', []).
//   filter('truncate', function () {
//       return function (text, length, end) {
//         if (isNaN(length))
//           length = 10;
//         if (end === undefined)
//           end = "...";
//         if (text.length <= length || text.length - end.length <= length) {
//           return text;
//         }
//         else {
//           return String(text).substring(0, length-end.length) + end;
//         }

//       };
//   });


// Sample filter appends 'bar' in the input string
angular.module('filter_check', []).
  filter('check', function () {
    return function(text){
      return text + "bar";
    };     
  });

function FirstCtrl($scope){
  $scope.message = "foo"
}
