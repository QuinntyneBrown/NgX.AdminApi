class WebComponentsListDetailComponent {

    constructor(private routeData: any) { }

    public get webComponent() { return this.routeData.listDetail.webComponent; }

    public static canActivate = () => {
        return ["$q", "$routeParams", "webComponent", ($q: any, $routeParams: any, webComponent: any) => {
            var deferred = $q.defer();
            var promises = [];

            if ($routeParams.id) {

            } else {

                promises.push(webComponent.createInstanceAsync());
                promises.push(webComponent.getAll());

                $q.all(promises).then((resultsArray) => {
                    deferred.resolve({
                        "webComponent": resultsArray[0],
                        "webComponents": resultsArray[1]
                    });
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