import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class SignUpService {
    constructor(private myhttp: HttpClient) {

    }
    getAll(): any {
        return this.myhttp.get("");
    }
}