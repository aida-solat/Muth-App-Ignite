// Language: typescript
// Path: app\navigation\header-options.ts
// header-options.ts
import { color } from "../theme"
import { StackNavigationOptions } from "@react-navigation/stack"

export const primaryHeader: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: color.palette.black,
  },
  headerTintColor: color.palette.white,
  headerTitleStyle: {
    fontWeight: "bold",
  },
}

export const secondaryHeader: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: color.palette.white,
  },
  headerTintColor: color.palette.black,
  headerTitleStyle: {
    fontWeight: "bold",
  },
}
