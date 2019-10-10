import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "my-addproperty",
    templateUrl: "./addproperty.component.html",
    styleUrls: ["./addproperty.css"]
})
export class AddPropertyComponent {

    selectedName: String;
    constructor(private arouter: ActivatedRoute, private Router: Router) {
        arouter.params.subscribe((params: any) => {
            this.selectedName = String(params["xyz"]);
        })
    }
}