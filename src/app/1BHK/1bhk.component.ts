import {Component} from "@angular/core";
@Component({
    selector:"my-1bhk",
    templateUrl:"./1bhk.component.html"
})
export class BhkComponent{
    data = [{
        name:"1RK", sqft: "10 sqft", deposite: "Rs 15,000", rent: "Rs 15,000+",
        furnish: "Full Furnished Flats", construct: "Newly Constructed"
    },
    {
        name:"2RK", sqft: "100 sqft", deposite: "Rs 35,000", rent: "Rs 25,000+",
        furnish: "Not Furnished Flats", construct: "Newly Constructed"
    }];
}