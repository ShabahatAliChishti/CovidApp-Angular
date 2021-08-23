const URL="https://covid19.mathdro.id/api";

let app=angular.module('MyApp',[])

app.controller('MyCtrl',($scope,$http)=>{

//this is controller
$scope.title="Stay Home Stay Safe";
// $scope.changeValue=()=>{

//     $scope.title="This is home time";
// }


$http.get(URL).then( (response)=>{

console.log(response.data);
$scope.all_data=response.data;

}

,(error)=>
{
console.log(error);
}
)
//get country data

$scope.get_c_data=()=>
{
    // console.log($scope.c);
    let country=$scope.c;
    const country_URL = "https://covid19.mathdro.id/api/countries/" + country;

    if(country=="")
    {
        //hide card when we remove value in textfield
        $scope.c_data=undefined;
        return;
    }
    $http.get(country_URL).then((response)=>
    {
        console.log(response.data)
        $scope.c_data=response.data;
    },(error)=>{
console.log(error);
    }
)


}
}

);
