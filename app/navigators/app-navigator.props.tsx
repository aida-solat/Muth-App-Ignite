//app-navigator.props.tsx
import { NavigationScreenProps } from "react-navigation"
import { RootStore } from "../../models/root-store"

export interface AppNavigatorProps extends NavigationScreenProps<{}> {
  /**
   * Some description here.
   * */
  rootStore?: RootStore

  /**
   *
   * */
  onNavigationStateChange?: (prevState: any, currentState: any, action: any) => void
}

/**
 *
 * */
export interface AppNavigatorState {
  /**
   *
   * */
  isReady: boolean
}

/**
 *
 *
 * */
export interface AppNavigatorParams {
  /**
   *
   * */
  rootStore?: RootStore
}

/**
 *
 * */
export interface AppNavigatorScreenProps extends NavigationScreenProps<AppNavigatorParams> {
  /**
   *
   * */
  rootStore?: RootStore
}

/**
 *
 * */
export interface AppNavigatorScreenParams {}

/**
 *
 * */
export interface AppNavigatorScreenOptions {
  /**
   *
   * */
  title?: string
}
