import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { withEnvironment } from "../extensions/with-environment"
import { MusicModel } from "../music/music"

/**
 * Model description here for TypeScript hints.
 */
export const MusicStoreModel = types

  .model("MusicStore")
  .props({
    musics: types.optional(types.array(MusicModel), []),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    saveMusics: (musicSnapshots: any) => {
      self.musics.replace(musicSnapshots)
    },
  }))
  .actions((self) => ({
    getMusics: async () => {
      const musicApi = new MusicApi(self.environment.api)
      const result = await musicApi.getMusics()

      if (result.kind === "ok") {
        self.saveMusics(result.musics)
      } else {
        __DEV__ && console.tron.log(result.kind)
      }
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type MusicStoreType = Instance<typeof MusicStoreModel>
export interface MusicStore extends MusicStoreType {}
type MusicStoreSnapshotType = SnapshotOut<typeof MusicStoreModel>
export interface MusicStoreSnapshot extends MusicStoreSnapshotType {}
export const createMusicStoreDefaultModel = () => types.optional(MusicStoreModel, {})
