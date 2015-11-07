angular.module("app", [
    "ngX"
]).config(["$routeProvider", ($routeProvider: any) => {

    $routeProvider.when("/", { 
        componentName: "homeComponent"
    });    

    $routeProvider.when("/create-web-component", {
        componentName: "editWebComponentComponent",
        templateUrl:"/src/app/components/editWebComponent.component.html"
    });                

}])