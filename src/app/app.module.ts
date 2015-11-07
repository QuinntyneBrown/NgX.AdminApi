angular.module("app", [
    "ngX"
]).config(["$routeProvider", ($routeProvider: any) => {

    $routeProvider.when("/", { 
        componentName: "homeComponent"
    });    

    $routeProvider.when("/web-component/create", {
        componentName: "webComponentsListDetailComponent"
    });  
    
    $routeProvider.when("/web-component/edit", {
        componentName: "webComponentsListDetailComponent"
    });               

    $routeProvider.when("/web-component/list", {
        componentName: "webComponentsListDetailComponent"
    });

}])