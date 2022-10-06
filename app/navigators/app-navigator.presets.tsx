//app-navigaator.presets.tsx
// Path: app\navigators\app-navigator.presets.tsx

import { NavigationScreenProps } from "react-navigation"
import { RootStore } from "../../models/root-store"

export interface AppNavigatorProps extends NavigationScreenProps<{}> {
  rootStore?: RootStore
}
