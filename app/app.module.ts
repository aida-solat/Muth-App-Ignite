import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { HttpModule } from "@angular/http"
import { ApiService } from "./services/api/index.ts"
import { UserService } from "./services/api/user.service.ts"

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [],
  providers: [ApiService],
  bootstrap: [],
})
export class AppModule {}
