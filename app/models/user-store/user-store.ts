// Language: typescript
// Path: app\models\user-store.tsx
import { action, computed, observable } from "mobx"
import { RootStoreModel } from "./root-store-model"
import { User } from "../../models/user"
import { Environment } from "../environment"

export class UserStore {
  rootStore: RootStoreModel
  env: Environment

  @observable
  user: User | null = null

  constructor(rootStore: RootStoreModel, env: Environment) {
    this.rootStore = rootStore
    this.env = env
  }

  @computed
  get isLoggedIn() {
    return this.user !== null
  }

  @action
  login = async (username: string, password: string) => {
    const user = await this.env.api.login(username, password)
    this.user = user
  }

  @action
  logout = async () => {
    await this.env.api.logout()
    this.user = null
  }
}
