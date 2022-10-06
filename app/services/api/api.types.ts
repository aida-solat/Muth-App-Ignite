import { GeneralApiProblem } from "./api-problem"

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface GetUsers {
  kind: "ok"
  user: User
}

export type GetUserResult = GetUsers | GeneralApiProblem
export interface Music {
  id: string
  name: string
  artist: string
  album: string
  genre: string
  year: string
  duration: string
  path: string
}

export interface GetMusics {
  kind: "ok"
  music: Music
}

export type GetMusicResult = Music | GeneralApiProblem

export type GetMusicsResult = GetMusics | GeneralApiProblem

export type GetUsersResult = { kind: "ok"; users: User[] } | { kind: "bad-data" }
