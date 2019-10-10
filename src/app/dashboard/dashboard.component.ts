import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector: "my-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.css"]

})
export class DashboardComponent {

    constructor(private router: Router) { }
    
    onListClick() {
        this.router.navigate(["/realEstate"]);
    }
}