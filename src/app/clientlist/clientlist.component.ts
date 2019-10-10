import { Component, Input } from "@angular/core";
@Component({
    selector: "my-clientlist",
    templateUrl: "./clientlist.component.html",
    styleUrls: ["./clientlist.css"]
})
export class ClientListComponent {

    clientdata = [
        { fname: "sayali", lname: "desai", email: "sayali@gmail.com", mobile: "8989887767565", address: "banaer, pune" },
        { fname: "janhavi", lname: "sutar", email: "janhavi@gmail.com", mobile: "0987655434", address: "ravet, pune" },
        { fname: "tanamaya", lname: "desai", email: "sayali@gmail.com", mobile: "8989887767565", address: "banaer, pune" },
        { fname: "sonia", lname: "sharma", email: "janhavi@gmail.com", mobile: "0987655434", address: "ravet, pune" }

    ];
    @Input()clients;
}