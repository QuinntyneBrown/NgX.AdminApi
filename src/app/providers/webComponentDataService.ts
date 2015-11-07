class WebComponentDataService {
    
    constructor(private dataService: any) { }

    public getAll = () => {
        return this.dataService.fromService({ url: this.baseUri +  "/getall", method: "GET" });
    }

    public add = () => {
        return this.dataService.fromService({ url: this.baseUri + "/add", method: "GET" });
    } 

    public get baseUri() { return "http://localhost:4646/api/webcomponent"; }
} 


angular.module("app").service("webComponentDataService",["dataService",WebComponentDataService])