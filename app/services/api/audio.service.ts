import { Injectable } from "@angular/core"
import { Http } from "@angular/http"
import { AuthService } from "./auth.service.ts"
import { ApiService } from "./api.service.ts"
import { Audio } from "../../models/index.ts"
import { authService } from "./auth.service"

@Injectable()
export class AudioService { extends ApiService<Audio> {
    constructor(http: Http, authService: AuthService) {
        super(http, authService, "audios")
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


