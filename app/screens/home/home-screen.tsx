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
      <View style={{ flex: 1, backgroundColor: color.palette.black }}>
        <Text style={{ color: color.palette.white }}>Home Screen</Text>
        <Button title="Go to Login" onPress={() => this.props.navigation.navigate("login")} />
        <Button title="Go to Register" onPress={() => this.props.navigation.navigate("register")} />
      </View>
    )
  }
}

HomeScreen.defaultProps = {}

HomeScreen.propTypes = {}
