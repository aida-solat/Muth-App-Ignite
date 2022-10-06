

import { Injectable } from "@angular/core"
import { Http } from "@angular/http"
import { AuthService } from "./auth.service.ts"
import { ApiService } from "./api.service.ts"
import { Chat } from "../../models/index.ts"
import { authService } from "./auth.service"

@Injectable()
export class ChatService { extends ApiService<Chat> {
    constructor(http: Http, authService: AuthService) {
        super(http, authService, "chats")
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


