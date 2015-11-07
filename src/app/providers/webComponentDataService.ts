class WebComponentDataService {
    
    constructor(private dataService: any) { }

    public getAll = () => {
        return this.dataService.fromService({ url: this.baseUri +  "/getall", method: "GET" });
    }

    public add = (options: any) => {


        return this.dataService.fromService({ url: this.baseUri + "/add", method: "POST", data: JSON.stringify(options.data) });
    } 

    public get baseUri() { return "/api/webcomponent"; }
} 


angular.module("app").service("webComponentDataService",["dataService",WebComponentDataService])