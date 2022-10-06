//home-screen.props.tsx
// Path: app\screens\home\home-screen.props.tsx

import { NavigationScreenProps } from "react-navigation"
import { RootStore } from "../../models/root-store"

export interface HomeScreenProps extends NavigationScreenProps<{}> {
  rootStore?: RootStore

  homeStore?: HomeStore

  homeLoading: boolean

  homeError: string

  homeErrorMessage: string

  homeReset: () => void

  homeResetSuccess: boolean

  homeResetSuccessMessage: string
}
