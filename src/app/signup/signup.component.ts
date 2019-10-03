import {Component} from "@angular/core";
@Component({
    selector:"my-signup",
    templateUrl:"./signup.component.html",
    styleUrls:["./siddhi.css"]

})
export class SignupComponent{
    onSubmit(value: any) {
        console.log(value);
    }
}