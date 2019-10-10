import { Component } from "@angular/core";
import { LoginService } from "./login.service";
@Component({
    selector: "my-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./siddhi.css"]

})
export class LoginComponent {
    onSubmit(value: any) {
        console.log(value);
    }
    constructor(private mylogin: LoginService) {
        mylogin.getAll().subscribe((Response: any) => {
            this.mylogin = Response;
        });
    }
}