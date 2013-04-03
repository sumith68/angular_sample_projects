var myApp = angular.module('myApp', [])


// Sample filter appends 'bar' in the input string
 myApp.filter('check', function () {
    return function(text){
      return text + "bar";
    };     
  });

// Sample filter to reverse the string
myApp.filter('reverse',function (){
	return function(text){
		return text.split("").reverse().join("");
	};
});

function FirstCtrl($scope){
  $scope.message = "foo"
}
