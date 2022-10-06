import { Http } from "@angular/http"
import { AuthService } from "./auth.service.ts"
import { ApiService } from "./api.service.ts"
import { File } from "../../models/index.ts"
import { authService } from "./auth.service"

@Injectable()
export class FileService extends ApiService<File> {
  constructor(http: Http, authService: AuthService) {
    super(http, authService, "files")
  }
}
