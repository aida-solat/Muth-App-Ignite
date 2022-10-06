// Language: typescript
// Path: app\services\api\real-api.ts
import { MusicApi } from "./music-api"
import { UserModel } from "../../models/user/user"
import { MusicModel } from "../../models/music/music"
import { ISimpleType } from "mobx-state-tree"

export interface MusicApi {
  getMusicList(): Promise<typeof MusicModel[]>
  getMusic(id: number): Promise<typeof MusicModel>
  getUser(id: number): Promise<typeof UserModel>
}

export class RealMusicApi implements MusicApi {
  getMusicList(): Promise<typeof MusicModel[]> {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) =>
        data.map((item: any) => ({
          id: item.id,
          title: item.title,
          user: { id: item.userId, name: `User ${item.userId}` },
        })),
      )
  }

  getMusic(id: number): Promise<typeof MusicModel> {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => ({
        id: data.id,
        title: data.title,
        user: { id: data.userId, name: `User ${data.userId}` },
      }))
  }

  getUser(id: number): Promise<typeof UserModel> {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => ({
        id: data.id,
      }))
  }
}

export class RealUserApi implements UserApi {
  getUsers(): Promise<typeof UserModel[]> {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) =>
        data.map((item: any) => ({
          id: item.id,
          name: item.name,
          username: item.username,
          email: item.email,
          address: {
            street: item.address.street,
            suite: item.address.suite,
            city: item.address.city,
            zipcode: item.address.zipcode,
            geo: {
              lat: item.address.geo.lat,
              lng: item.address.geo.lng,
            },
          },
          phone: item.phone,
          website: item.website,
          company: {
            name: item.company.name,
            catchPhrase: item.company.catchPhrase,
            bs: item.company.bs,
          },
        })),
      )
  }
}

export interface UserApi {
  getUser(id: ISimpleType<Number>): Promise<typeof UserModel>
}
