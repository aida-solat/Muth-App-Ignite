import { Injectable } from "@angular/core"
import { Http } from "@angular/http"
import { AuthService } from "./auth.service.ts"
import { ApiService } from "./api.service.ts"
import { Post } from "../../models/index.ts"
import { authService } from "./auth.service"

@Injectable()
export class PostService { extends ApiService<Post> {
    constructor(http: Http, authService: AuthService) {
        super(http, authService, "posts")
    }
    }

    @NgModule({
        imports: [BrowserModule, HttpModule],
        declarations: [],
        providers: [ApiService],
        bootstrap: [],
    })
    export class AppModule {}
}

