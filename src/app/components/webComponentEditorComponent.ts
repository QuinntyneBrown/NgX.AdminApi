class WebComponentEditorComponent {
    
    constructor() {
        
    }
} 

ngX.Component({
    selector: "web-component-editor",
    component: WebComponentEditorComponent,
    inputs: ["webComponent"],
    template: [
        "<div>",  
        "<h1 data-ng-if='vm.webComponent.id === 0'>Create Web Component</h1>",
        "<h1 data-ng-if='vm.webComponent.id != 0'>Edit Web Component</h1>",             
        "<form>",
        "<div class='form-control'>",
        "<a>Name</a>",
        "<input type='text' data-ng-model='vm.webComponent.name'></input>",
        "</div>",
        "<div class='form-control'>",
        "<a>Version</a>",
        "<input type='text' data-ng-model='vm.webComponent.version'></input>",
        "</div>",
        "<div class='form-control'>",
        "<a>Template</a>",
        "<input type='text' data-ng-model='vm.webComponent.template'></input>",
        "</div>",
        "<div class='form-control'>",
        "<a>Css</a>",
        "<input type='text' data-ng-model='vm.webComponent.css'></input>",
        "</div>",
        "<div class='form-control'>",
        "<input type='submit' data-ng-click='vm.webComponent.save()' value='save'></input>",
        "</div>",
        "</form>",
        "</div>"
    ].join(" ")
})