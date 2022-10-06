//user.ts
import { types } from "mobx-state-tree"

export const UserModel = types
  .model("User")
  .props({
    id: types.optional(types.number, 0),
    name: types.optional(types.string, ""),
    email: types.optional(types.string, ""),
    token: types.optional(types.string, ""),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    updateUser: (user) => {
      self.id = user.id
      self.name = user.name
      self.email = user.email
      self.token = user.token
    },
    deleteUser: () => {
      self.id = 0
      self.name = ""
      self.email = ""
      self.token = ""
    },
    updateUsers: (users) => {
      self.users = users
    },
  }))
  .actions((self) => ({
    /**
     * Sign in the user
     */
    signIn: async () => {
      const result = await self.environment.api.signIn()
      if (result.kind === "ok") {
        self.updateUser(result.user)
      }
      return result
    },

    /**
     * Sign out the user
     */
    signOut: async () => {
      const result = await self.environment.api.signOut()
      if (result.kind === "ok") {
        self.deleteUser()
      }
      return result
    },

    /**
     * Get users
     */
    getUsers: async () => {
      const result = await self.environment.api.getUsers()
      if (result.kind === "ok") {
        self.updateUser(result.user)
      }
      return result
    },
  }))

type UserModelType = typeof UserModel.Type
export interface User extends UserModelType {}
type UserSnapshotType = typeof UserModel.SnapshotType
export interface UserSnapshot extends UserSnapshotType {}
export const createUserDefaultModel = () => types.optional(UserModel, {})
