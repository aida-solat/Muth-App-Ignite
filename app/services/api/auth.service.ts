import { Injectable } from "@angular/core"
import { Http, Headers, RequestOptions } from "@angular/http"
import { Observable } from "rxjs/Observable"
import "rxjs/add/operator/map"
import "rxjs/add/operator/catch"
import "rxjs/add/observable/throw"
import { apiService } from "./api.service"
import { observable, action } from "mobx"
import { RootStore } from "../stores/root-store"

@Injectable()
export class authService {
  constructor(private api: apiService) {}

  login(credentials: any): Observable<any> {
    return this.api.post("/login", credentials)
  }

  register(credentials: any): Observable<any> {
    return this.api.post("/register", credentials)
  }

  logout(): Observable<any> {
    return this.api.post("/logout", {})
  }

  confirm(token: string): Observable<any> {
    return this.api.post("/confirm", { token })
  }

  resetPassword(token: string, password: string): Observable<any> {
    return this.api.post("/reset-password", { token, password })
  }

  forgotPassword(email: string): Observable<any> {
    return this.api.post("/forgot-password", { email })
  }

  changePassword(oldPassword: string, newPassword: string): Observable<any> {
    return this.api.post("/change-password", { oldPassword, newPassword })
  }

  changeEmail(newEmail: string): Observable<any> {
    return this.api.post("/change-email", { newEmail })
  }

  confirmEmail(token: string): Observable<any> {
    return this.api.post("/confirm-email", { token })
  }
}

export class AuthService {
  @observable
  isAuth: boolean = false

  @observable
  user: any = {}

  constructor(private rootStore: RootStore) {}

  @action
  login(credentials: any): Observable<any> {
    return this.rootStore.api.post("/login", credentials)
  }

  @action
  register(credentials: any): Observable<any> {
    return this.rootStore.api.post("/register", credentials)
  }

  @action
  logout(): Observable<any> {
    return this.rootStore.api.post("/logout", {})
  }

  @action
  confirm(token: string): Observable<any> {
    return this.rootStore.api.post("/confirm", { token })
  }

  @action
  resetPassword(token: string, password: string): Observable<any> {
    return this.rootStore.api.post("/reset-password", { token, password })
  }

  @action
  forgotPassword(email: string): Observable<any> {
    return this.rootStore.api.post("/forgot-password", { email })
  }

  @action
  changePassword(oldPassword: string, newPassword: string): Observable<any> {
    return this.rootStore.api.post("/change-password", { oldPassword, newPassword })
  }

  @action
  changeEmail(newEmail: string): Observable<any> {
    return this.rootStore.api.post("/change-email", { newEmail })
  }

  @action
  confirmEmail(token: string): Observable<any> {
    return this.rootStore.api.post("/confirm-email", { token })
  }
}
