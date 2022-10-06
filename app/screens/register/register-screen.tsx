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
      <View style={{ flex: 1, backgroundColor: color.palette.black }}>
        <Text style={{ color: color.palette.white }}>Register Screen</Text>
        <Button title="Go to Login" onPress={() => this.props.navigation.navigate("login")} />
      </View>
    )
  }
}

RegisterScreen.defaultProps = {}

RegisterScreen.propTypes = {}
