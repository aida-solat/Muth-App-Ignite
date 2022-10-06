import { MusicStoreModel } from "./music-store"

test("can be created", () => {
  const instance = MusicStoreModel.create({})

  expect(instance).toBeTruthy()
})
