import { UserSnapshot } from "../user/user"
import { Api } from "../../services/api"
import { Environment } from "../../../environment"

export interface UserApi {
  getUsers: () => Promise<GetUsersResult>
}

export interface GetUsersResult {
  kind: "ok" | "unauthorized" | "other"
  users?: UserSnapshot[]
}

export class RealUserApi implements UserApi {
  api: Api
  env: Environment

  constructor(api: Api = new Api(), env: Environment = new Environment()) {
    this.api = api
    this.env = env
  }

  async getUsers(): Promise<GetUsersResult> {
    const response = await this.api.setup().get(`${this.env.apiUrl}/users`)
    if (response.ok) {
      const users: UserSnapshot[] = await response.json()
      return { kind: "ok", users }
    } else if (response.status === 401) {
      return { kind: "unauthorized" }
    } else {
      return { kind: "other" }
    }
  }
}
