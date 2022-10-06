// Language: typescript
// Path: app\models\root-store.tsx
import { UserStore } from "./user-store"
import { RootStoreModel } from "./root-store-model"
import { Environment } from "../environment"

export const setupRootStore = (): RootStoreModel => {
  const env = new Environment()
  const userStore = new UserStore(env)

  const rootStore = {
    userStore,
  }

  return rootStore
}
