import { UserModel } from "../../models/user/user"
import { MusicModel } from "../../models/music/music"

export interface MusicApi {
  getMusicList(): Promise<typeof MusicModel[]>
  getMusic(id: number): Promise<typeof MusicModel>
  getUser(id: number): Promise<typeof UserModel>
}
