class EditWebComponentComponent {

    constructor(private routeData:any) { }

    public get webComponent() { return this.routeData.webComponent; } 

    public static canActivate = () => {
        return ["$q", "$routeParams", "webComponent", ($q: any, $routeParams: any, webComponent:any) => {

            var deferred = $q.defer();

            if ($routeParams.id) {

            } else {
                webComponent.createInstanceAsync().then((results) => {
                    deferred.resolve(results);
                });
            }
            
            return deferred.promise;

        }];
    }
     

}

ngX.Component({
    component: EditWebComponentComponent,
    route: "/create-web-component",
    key: "webComponent",
    providers:["routeData"]
});