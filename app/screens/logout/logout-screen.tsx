// Language: typescript
// Path: app\screens\logout\logout-screen.tsx
// logout-screen.tsx
import React, { FunctionComponent as Component } from "react"
import { View, ViewStyle } from "react-native"
import { Screen, Text as TextComponent, Header } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { useStores } from "../../models"
import { color } from "../../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const LogoutScreen: Component = observer(function LogoutScreen() {
  const navigation = useNavigation()
  const { userStore } = useStores()

  return (
    <View testID="LogoutScreen" style={ROOT}>
      <Header
        headerTx="logoutScreen.header"
        leftIcon="back"
        onLeftPress={() => navigation.goBack()}
      />
      <Screen style={ROOT} preset="scroll">
        <TextComponent preset="header" text="Logout" />
        <TextComponent preset="body" tx="logoutScreen.body" />
      </Screen>
    </View>
  )
} as any)

//useStores is a custom hook that returns the root store. It’s defined in app\models\index.tsx:

//The RootStoreContext is defined in app\models\root-store-context.tsx:

//The RootStore is defined in app\models\root-store.tsx:

//The UserStore is defined in app\models\user-store.tsx:

//The User model is defined in app\models\user.ts:
// // Language: typescript
// // Path: app\models\user.ts
// export interface User {
//   id: number
//   name: string
// }

//The API is defined in app\services\api\api.ts:
// // Language: typescript
// // Path: app\services\api\api.ts
// import { User } from "../../models/user"
//
// export class Api {

//   login = async (username: string, password: string): Promise<User> => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({
//           id: 1,
//           name: "Test User",
//         })
//       }, 1000)
//     })
//   }
//
//   logout = async (): Promise<void> => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve()
//       }, 1000)
//     })
//   }
// }

//The Environment is defined in app\environment.ts:
// // Language: typescript
// // Path: app\environment.ts
// import { Api } from "./services/api/api"
//

// export class Environment {
//   api: Api
//
//   constructor() {
//     this.api = new Api()
//   }
// }

//The RootStoreModel is defined in app\models\root-store-model.ts:
// // Language: typescript
// // Path: app\models\root-store-model.ts
// import { UserStore } from "./user-store"
//
// export interface RootStoreModel {
//   userStore: UserStore
// }

//The RootStoreProvider is defined in app\providers\root-store-provider.tsx:
// // Language: typescript
// // Path: app\providers\root-store-provider.tsx
// import React, { FunctionComponent as Component } from "react"

// import { RootStoreContext } from "../models/root-store-context"
// import { RootStoreModel, setupRootStore } from "../models/root-store"
//
// export const RootStoreProvider: Component = ({ children }) => {
//   const rootStore: RootStoreModel = setupRootStore()
//
//   return (
//     <RootStoreContext.Provider value={rootStore}>{children}</RootStoreContext.Provider>
//   )
// }

//The RootStoreProvider is defined in app\providers\root-store-provider.tsx:
// // Language: typescript
// // Path: app\providers\root-store-provider.tsx
// import React, { FunctionComponent as Component } from "react"

// import { RootStoreContext } from "../models/root-store-context"
// import { RootStoreModel, setupRootStore } from "../models/root-store"
//
// export const RootStoreProvider: Component = ({ children }) => {
//   const rootStore: RootStoreModel = setupRootStore()
