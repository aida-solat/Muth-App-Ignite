//root-store.ts
import { RootStoreModel, RootStore } from "./root-store"
import { UserModel, User } from "../user/user"
import { NavigationStoreModel, NavigationStore } from "../navigation/navigation-store"
import { StartupStoreModel, StartupStore } from "../startup/startup-store"
import { Api } from "../../services/api"
import { Environment } from "../../environment"
import { create } from "mobx-persist"
import AsyncStorage from "@react-native-community/async-storage"
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer,
} from "react-navigation-redux-helpers"
import { createAppContainer } from "react-navigation"
import { AppNavigator } from "../../navigators/app-navigator"
import { createLogger } from "redux-logger"
import { applyMiddleware, createStore, Store } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { persistStore, persistReducer } from "redux-persist"
import { createMigrate, persistCombineReducers } from "redux-persist"
import { createMigrate as createMigrate2 } from "redux-persist-immutable"
import { createMigrate as createMigrate3 } from "redux-persist-transform-immutable"
import { createMigrate as createMigrate4 } from "redux-persist-immutable-state-invariant"
import { createMigrate as createMigrate5 } from "redux-persist-immutablejs"

const rootStore: RootStoreModel = {
  userStore: UserModel.create({} as User),
  navigationStore: NavigationStoreModel.create({} as NavigationStore),
  startupStore: StartupStoreModel.create({} as StartupStore),
}
