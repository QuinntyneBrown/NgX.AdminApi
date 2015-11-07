class WebComponentsListDetailComponent {

    constructor(private routeData: any) { }

    public get webComponent() { return this.routeData.listDetail.webComponent; }

    public static canActivate = () => {
        return ["$q", "$routeParams", "webComponent", ($q: any, $routeParams: any, webComponent: any) => {

            var deferred = $q.defer();

            if ($routeParams.id) {

            } else {
                webComponent.createInstanceAsync().then((results) => {
                    deferred.resolve({ "webComponent": results });
                });
            }

            return deferred.promise;

        }];
    }


}

ngX.Component({
    component: WebComponentsListDetailComponent,
    routes: ["/web-component/create", "/web-component/edit", "/web-component/list"],
    styles:[""].join(" "),
    key: "listDetail",
    providers: ["routeData"]
});