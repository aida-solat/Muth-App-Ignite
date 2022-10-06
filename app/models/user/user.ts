//user.ts
import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { User } from "../../services/api/api.types"

/**
 * Model description here for TypeScript hints.
 */

export const UserModel = types
  .model("User")
  .props({
    id: types.number,
    name: types.string,
    username: types.string,
    email: types.string,
    address: types.model({
      street: types.string,
      suite: types.string,
      city: types.string,
      zipcode: types.string,
      geo: types.model({
        lat: types.string,
        lng: types.string,
      }),
    }),
    phone: types.string,
    website: types.string,
    company: types.model({
      name: types.string,
      catchPhrase: types.string,
      bs: types.string,
    }),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type UserModelType = Instance<typeof UserModel>
export interface User extends UserModelType {}
type UserSnapshotType = SnapshotOut<typeof UserModel>
export interface UserSnapshot extends UserSnapshotType {}

export interface User {
  id: number
  name: string
}
