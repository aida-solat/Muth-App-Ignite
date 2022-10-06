import { identifier } from "mobx-state-tree/dist/internal"
import { MusicModel } from "./music"

test("can be created", () => {
  const instance = MusicModel.create({})

  expect(instance).toBeTruthy()
})
