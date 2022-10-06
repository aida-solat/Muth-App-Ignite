import { Injectable } from "@angular/core"
import { Http } from "@angular/http"
import { AuthService } from "./auth.service.ts"
import { ApiService } from "./api.service.ts"
import { User } from "../../models/index.ts"
import { authService } from "./auth.service"


@Injectable()
export class UserService { extends ApiService<User> {
    constructor(http: Http, authService: AuthService) {
        super(http, authService, "users")
    }
}

    
}
