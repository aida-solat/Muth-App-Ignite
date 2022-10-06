// Language: typescript
// Path: app\services\api\mock-api.ts
import { MusicApi } from "./music-api"
import { UserModel } from "../../models/user/user"
import { MusicModel } from "../../models/music/music"

export class MockMusicApi implements MusicApi {
  getMusicList(): Promise<MusicModel[]> {
    return Promise.resolve([
      { id: 1, title: "Music 1", user: { id: 1, name: "User 1" } },
      { id: 2, title: "Music 2", user: { id: 2, name: "User 2" } },
      { id: 3, title: "Music 3", user: { id: 3, name: "User 3" } },
    ])
  }

  getMusic(id: number): Promise<MusicModel> {
    return Promise.resolve({ id: id, title: `Music ${id}`, user: { id: id, name: `User ${id}` } })
  }

  getUser(id: number): Promise<UserModel> {
    return Promise.resolve({ id: id, name: `User ${id}` })
  }
}
