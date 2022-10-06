import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const MusicModel = types
  .model("Music")
  .props({
    id: types.identifier,
    title: types.string,
    artist: types.string,
    album: types.string,
    year: types.number,
    genre: types.string,
    track: types.number,
    duration: types.number,
    cover: types.string,
    file: types.string,
    favorite: types.boolean,
    playlist: types.array(types.string),
    playlistId: types.string,
    playlistName: types.string,
    playlistIndex: types.number,
    playlistCount: types.number,
    playlistTotal: types.number,
    playlistShuffle: types.boolean,
    playlistRepeat: types.boolean,
    playlistLoop: types.boolean,
    playlistPlay: types.boolean,
    playlistPause: types.boolean,
    playlistStop: types.boolean,
    playlistNext: types.boolean,
    playlistPrevious: types.boolean,
    playlistVolume: types.number,
    playlistVolumeUp: types.boolean,
    playlistVolumeDown: types.boolean,
    playlistVolumeMute: types.boolean,
    playlistVolumeUnmute: types.boolean,
    playlistVolumeSet: types.boolean,
    playlistVolumeReset: types.boolean,
    playlistVolumeSetValue: types.number,
    playlistVolumeSetValuePercent: types.number,
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type MusicType = Instance<typeof MusicModel>
export interface Music extends MusicType {}
type MusicSnapshotType = SnapshotOut<typeof MusicModel>
export interface MusicSnapshot extends MusicSnapshotType {}
export const createMusicDefaultModel = () => types.optional(MusicModel, {})
