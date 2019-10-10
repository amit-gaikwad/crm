import { Component } from "@angular/core";
import { LoginService } from '../Shared/Login.service';
import {Router} from "@angular/router";
@Component({
    selector: "my-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./siddhi.css"]

})
export class LoginComponent {
    arr:any;
    constructor(private loginServ:LoginService,private router:Router)
    {
        loginServ.getLogin().subscribe((response:any)=>{
            this.arr=response;
        });
    }
    onSubmit(values: any) {
       // console.log(value);
        if(values.username==this.arr.UName && values.pwd==this.arr.PWD)
        {
        this.router.navigate(["/dashboard"]);
        }
    }
   
}