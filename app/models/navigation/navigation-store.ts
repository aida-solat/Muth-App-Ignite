//navigate - store.ts
import {
  NavigationActions,
  NavigationContainerComponent,
  NavigationParams,
  NavigationRoute,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation"
import { inject, observer } from "mobx-react"
import { RootStore } from "../models/root-store"
import { observable } from "mobx"
import { NavigationContainer } from "react-navigation"
import { NavigationScreenProps } from "react-navigation"
import { NavigationScreenComponent } from "react-navigation"

export interface NavigateStoreProps extends NavigationScreenProps<{}> {
  rootStore: RootStore
}

@inject("rootStore")
@observer
export class NavigateStore {
  @observable.ref navigationState: NavigationState
  @observable.ref navigation: NavigationScreenProp<NavigationState, NavigationParams>
  @observable.ref container: NavigationContainerComponent

  constructor() {
    this.navigationState = {
      index: 0,
      routes: [
        {
          key: "Login",
          routeName: "Login",
        },
      ],
    }
  }

  navigate = (routeName: string, params?: NavigationParams) => {
    this.navigation.navigate(routeName, params)
  }

  goBack = (key?: string | null) => {
    this.navigation.goBack(key)
  }

  setTopLevelNavigator = (navigatorRef: NavigationContainerComponent) => {
    this.container = navigatorRef
  }

  dispatch = (action: NavigationActions.NavigationNavigateAction) => {
    this.container.dispatch(action)
  }

  getCurrentRoute = (): NavigationRoute => {
    if (!this.navigationState) {
      return null
    }

    const route = this.navigationState.routes[this.navigationState.index]

    // dive into nested navigators
    if (route.routes) {
      return this.getCurrentRoute(route)
    }

    return route
  }
}
