// Language: typescript
// Path: app\models\root-store-context.tsx
import { createContext } from "react"
import { RootStore } from "./root-store"

export const RootStoreContext = createContext<RootStore | null>(null)
