// Language: typescript
// Path: app\screens\logout\logout-screen.props.ts
// logout-screen.props.ts
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParamList } from "../../navigation/root-navigator.types"

export interface LogoutScreenProps extends StackScreenProps<RootStackParamList, "logout"> {
  /**
   * An optional style override useful for padding & margin.
   * */
  style?: ViewStyle
}
