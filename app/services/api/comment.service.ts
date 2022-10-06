import { Injectable } from "@angular/core"
import { Http } from "@angular/http"
import { AuthService } from "./auth.service.ts"
import { ApiService } from "./api.service.ts"
import { Comment } from "../../models/index.ts"
import { authService } from "./auth.service"

@Injectable()
export class CommentService { extends ApiService<Comment> {
    constructor(http: Http, authService: AuthService) {
        super(http, authService, "comments")
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
