class HeaderComponent {


}

ngX.Component({
    selector:"ng-x-header",
    component: HeaderComponent,
    template: ["<div>",
        "<a href='#/'>home</a>",
        "<a href='#/create-web-component'>create web component</a>",
        "</div>"
    ].join(" ")
});