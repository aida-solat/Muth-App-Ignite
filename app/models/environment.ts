//environment-types.ts
import { getEnv, Instance, SnapshotOut, types } from "mobx-state-tree"

export class Environment {
  apiUrl: string

  constructor() {
    this.apiUrl = getEnv(self).API_URL
  }
}

export const createEnvironment = () => {
  return new Environment()
}

export const EnvironmentModel = types

  .model("Environment")
  .props({
    API_URL: types.optional(types.string, ""),
  })
  .views((self) => ({
    get environment() {
      return self
    },
  }))
  .actions((self) => ({}))

export type EnvironmentType = Instance<typeof EnvironmentModel>
export interface Environment extends EnvironmentType {}
export type EnvironmentSnapshotType = SnapshotOut<typeof EnvironmentModel>
export interface EnvironmentSnapshot extends EnvironmentSnapshotType {}
export const createEnvironmentDefaultModel = () => types.optional(EnvironmentModel, {})
