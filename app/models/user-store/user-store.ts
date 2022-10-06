//user-store.ts
import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { RealUserApi } from "../../services/api/user-api"
import { withEnvironment } from "../extensions/with-environment"
import { UserModel, UserSnapshot } from "../user/user"

export const UserStoreModel = types
  .model("UserStore")
  .props({
    users: types.optional(types.array(UserModel), []),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    saveUsers: (userSnapshots: UserSnapshot[]) => {
      self.users.replace(userSnapshots)
    },
  }))
  .actions((self) => ({
    getUsers: async () => {
      const userApi = new RealUserApi()
      const result = await userApi.getUsers()
      console.log("result", result)

      if (result.kind === "ok") {
        self.saveUsers(result.users)
      } else {
        __DEV__ && console.tron.log(result.kind)
      }
    },
  }))

type UserStoreType = Instance<typeof UserStoreModel>
export interface UserStore extends UserStoreType {}
type UserStoreSnapshotType = SnapshotOut<typeof UserStoreModel>
export interface UserStoreSnapshot extends UserStoreSnapshotType {}
export const createUserStoreDefaultModel = () => types.optional(UserStoreModel, {})
