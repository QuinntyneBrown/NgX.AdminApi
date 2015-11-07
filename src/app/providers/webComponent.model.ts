class WebComponent {
    constructor(private $q: ng.IQService, private webComponentDataService: any) { }


    public createInstanceAsync = (options?: any) => {
        var instance = new WebComponent(this.$q, this.webComponentDataService);

        if (options && options.data) {
            instance.id = options.data.id;
            instance.template = options.data.template;
            instance.css = options.data.css;
            instance.version = options.data.version;
        }

        return this.$q.when(instance);
    }

    public save = () => {
        
    }

    public id:number = 0;
    public template: string;
    public css: string;
    public version: string;

}

angular.module("app").service("webComponent", ["$q", "webComponentDataService", WebComponent]);