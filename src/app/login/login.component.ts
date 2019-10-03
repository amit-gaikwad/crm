import { Component } from "@angular/core";
@Component({
    selector: "my-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./siddhi.css"]

})
export class LoginComponent {
    onSubmit(value: any) {
        console.log(value);
    }
}