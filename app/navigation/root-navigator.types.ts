// Language: typescript
// Path: app\navigation\root-navigator.types.ts
// root-navigator.types.ts
import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"

export type RootStackParamList = {
  welcome: undefined
  demo: undefined

  login: undefined
  logout: undefined
}

export type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "welcome">
export type WelcomeScreenRouteProp = RouteProp<RootStackParamList, "welcome">

export type DemoScreenNavigationProp = StackNavigationProp<RootStackParamList, "demo">
export type DemoScreenRouteProp = RouteProp<RootStackParamList, "demo">

export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "login">
export type LoginScreenRouteProp = RouteProp<RootStackParamList, "login">

export type LogoutScreenNavigationProp = StackNavigationProp<RootStackParamList, "logout">
export type LogoutScreenRouteProp = RouteProp<RootStackParamList, "logout">
