import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class LoginService
{
constructor(private http:HttpClient){

}
getLogin():any
{
      
        return this.http.get(" http://demo6658474.mockable.io/Test");
    
}
}