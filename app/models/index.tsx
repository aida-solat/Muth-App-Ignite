// Language: typescript
// Path: app\models\index.tsx
import { RootStore, setupRootStore } from "./root-store"
import { useContext } from "react"
import { RootStoreContext } from "./root-store-context"

export const useStores = (): RootStore => {
  return useContext(RootStoreContext)
}

export const setupStores = (rootStore: RootStore = setupRootStore()): RootStore => {
  return rootStore
}
