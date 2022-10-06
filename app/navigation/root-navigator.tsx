// Language: typescript
// Path: app\navigation\root-navigator.tsx
// root-navigator.tsx
import { createStackNavigator } from "@react-navigation/stack"
import { RootStackParamList } from "./root-navigator.types"
import { WelcomeScreen, DemoScreen, LoginScreen, LogoutScreen } from "../screens"
import { primaryHeader, secondaryHeader } from "./header-options"

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="welcome"
    >
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="demo" component={DemoScreen} options={primaryHeader} />
      <Stack.Screen name="login" component={LoginScreen} options={secondaryHeader} />
      <Stack.Screen name="logout" component={LogoutScreen} options={secondaryHeader} />
    </Stack.Navigator>
  )
}
