import {Component} from "@angular/core";
@Component({
    selector:"my-2bhk",
    templateUrl:"./2bhk.component.html"
})
export class Bhk2Component{
    data = [{
        name:"1RK", sqft: "910 sqft", deposite: "Rs 35,000", rent: "Rs 15,000+",
        furnish: "Full Furnished Flats", construct: "Newly Constructed"
    },
    {
        name:"2RK", sqft: "1000 sqft", deposite: "Rs 45,000", rent: "Rs 25,000+",
        furnish: "Not Furnished Flats", construct: "Newly Constructed"
    }];
}