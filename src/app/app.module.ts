angular.module("app", [
    "ngX"
]).config(["$routeProvider", ($routeProvider: any) => {

    $routeProvider.when("/", { 
        componentName: "homeComponent"
    });    

    $routeProvider.when("/create-web-component", {
        componentName: "editWebComponentComponent"
    });  
    
    $routeProvider.when("/edit-web-component/:id", {
        componentName: "editWebComponentComponent"
    });               

}])