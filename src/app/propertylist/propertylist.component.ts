import{Component} from '@angular/core';
@Component({
    selector:"my-propertylist",
    templateUrl:"./propertylist.component.html"
})
export class PropertyListComponent{
    data = [{
        name:"1RK", sqft: "910 sqft", deposite: "Rs 35,000", rent: "Rs 15,000+",
        furnish: "Full Furnished Flats", construct: "Newly Constructed"
    },
    {
        name:"2BHK", sqft: "1000 sqft", deposite: "Rs 45,000", rent: "Rs 25,000+",
        furnish: "Not Furnished Flats", construct: "Newly Constructed"
    }];
}