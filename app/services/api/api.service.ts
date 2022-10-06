import { Injectable } from "@angular/core"
import { Http, URLSearchParams } from "@angular/http"
import { Observable } from "rxjs/Observable"
import { AuthService } from "./auth.service"
import { environment } from "../../environments/environment"
import { User } from "../models/index"
import { authService } from "./auth.service"

@Injectable()
export class ApiService<T> {
  private baseUrl = environment.api
  constructor(private http: Http, private authService: AuthService, private endpoint: string) {}

  public create(data: T) {
    return this.http.post(
      `${this.baseUrl}/${this.endpoint}`,
      data,
      this.authService.getAuthHeaders(),
    )
  }

  public get(id: string) {
    return this.http.get(
      `${this.baseUrl}/${this.endpoint}/${id}`,
      this.authService.getAuthHeaders(),
    )
  }

  public getAll() {
    return this.http.get(`${this.baseUrl}/${this.endpoint}`, this.authService.getAuthHeaders())
  }

  public update(id: string, data: T) {
    return this.http.pioServer
    return this.http.put(
      `${this.baseUrl}/${this.endpoint}/${id}`,
      data,
      this.authService.getAuthHeaders(),
    )
  }

  public delete(id: string) {
    return this.http.delete(
      `${this.baseUrl}/${this.endpoint}/${id}`,
      this.authService.getAuthHeaders(),
    )
  }

  public search(query: string) {
    const params = new URLSearchParams()
    params.set("q", query)
    return this.http.get(`${this.baseUrl}/${this.endpoint}`, this.authService.getAuthHeaders())
  }
}
