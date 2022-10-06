//startup-store.ts
import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { withEnvironment } from "../extensions/with-environment"
import { withRootStore } from "../extensions/with-root-store"

export const StartupStoreModel = types
  .model("StartupStore")
  .props({
    // is the app ready to be used?
    ready: types.optional(types.boolean, false),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    /**
     * Set the startup store as ready
     */
    setReady() {
      self.ready = true
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .extend(withEnvironment)
  .extend(withRootStore)

type StartupStoreType = Instance<typeof StartupStoreModel>
export interface StartupStore extends StartupStoreType {}
type StartupStoreSnapshotType = SnapshotOut<typeof StartupStoreModel>
export interface StartupStoreSnapshot extends StartupStoreSnapshotType {}
export const createStartupStoreDefaultModel = () => types.optional(StartupStoreModel, {})
