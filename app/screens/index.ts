export * from "./login/index"
export * from "./register/index"
export * from "./home/home-screen"
export * from "./error/error-boundary"

// Path: app\screens\login\index.ts
export * from "./login-screen"

// Path: app\screens\register\index.ts
export * from "./register-screen"

// Path: app\screens\login\login-screen.tsx
import * as React from "react"
import { View, Text, Button } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { inject, observer } from "mobx-react"
import { RootStore } from "../../models/root-store"
import { color } from "../../theme"

export interface LoginScreenProps extends NavigationScreenProps<{}> {
    rootStore: RootStore
}

@inject("rootStore")
@observer
export class LoginScreen extends React.Component<LoginScreenProps, {}> {
    render() {
        return (
            <View style= {{ flex: 1, backgroundColor: color.palette.black }
    }>


// Path: app\screens\register\register-screen.tsx
import * as React from "react"
import { View, Text, Button } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { inject, observer } from "mobx-react"
import { RootStore } from "../../models/root-store"
import { color } from "../../theme"

export interface RegisterScreenProps extends NavigationScreenProps<{}> {
    rootStore: RootStore
}

@inject("rootStore")
@observer
export class RegisterScreen extends React.Component<RegisterScreenProps, {}> {
    render() {
        return (
            <View style= {{ flex: 1, backgroundColor: color.palette.black }
    }>

// Path: app\screens\home\home-screen.tsx
import * as React from "react"
import { View, Text, Button } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { inject, observer } from "mobx-react"
import { RootStore } from "../../models/root-store"
import { color } from "../../theme"

export interface HomeScreenProps extends NavigationScreenProps<{}> {
    rootStore: RootStore
}

@inject("rootStore")
@observer
export class HomeScreen extends React.Component<HomeScreenProps, {}> {
    render() {
        return (
            <View style= {{ flex: 1, backgroundColor: color.palette.black }
    }>
    <Text style={ { color: color.palette.white } }> Home Screen < /Text>
    < Button title = "Go to Login" onPress = { () => this.props.navigation.navigate("login") } />
    < Button title = "Go to Register" onPress = { () => this.props.navigation.navigate("register") } />
    < /View>
    )
    }
    }

// Path: app\screens\error\error-boundary.tsx
import * as React from "react"
import { View, Text, Button } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { inject, observer } from "mobx-react"
import { RootStore } from "../../models/root-store"
import { color } from "../../theme"

export interface ErrorBoundaryProps extends NavigationScreenProps<{}> {
    rootStore: RootStore
}

@inject("rootStore")
@observer
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, {}> {
    render() {
        return (
            <View style= {{ flex: 1, backgroundColor: color.palette.black }
    }>
    <Text style={ { color: color.palette.white } }> Error Boundary < /Text>
    < Button title = "Go to Login" onPress = { () => this.props.navigation.navigate("login") } />
    < Button title = "Go to Register" onPress = { () => this.props.navigation.navigate("register") } />
    < /View>
    )
    }
    }

// Path: app\components\index.ts
export * from "./button/button"
export * from "./text-field/text-field"

// Path: app\components\button\index.ts
export * from "./button"

// Path: app\components\text-field\index.ts
export * from "./text-field"

// Path: app\components\button\button.tsx

// export other screens here
