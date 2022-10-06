//login-screen.tsx
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { inject, observer } from "mobx-react"
import { RootStore } from "../../models/root-store"
import { translate } from "../../i18n"
import { Button } from "../../components"

export interface LoginScreenProps extends NavigationScreenProps<{}> {
  /**
   * Some description here.
   * */
  rootStore?: RootStore
}

/**
 * Describe your component here
 * */
@inject("rootStore")
@observer
export class LoginScreen extends React.Component<LoginScreenProps, {}> {
  goBack = () => this.props.navigation.goBack(null)

  render() {
    const { rootStore } = this.props
    const { language } = rootStore!.i18nStore
    const { setLanguage } = rootStore!.i18nStore
    return (
      <View testID="LoginScreen" style={FULL}>
        <Text preset="header" text="Welcome" />
        <Text preset="default" tx="welcomeScreen.poweredBy" />
        <Button
          style={CONTAINER}
          textStyle={BOLD}
          tx="welcomeScreen.changeLanguage"
          onPress={() => setLanguage(language === "en" ? "de" : "en")}
        />
        <Button
          style={CONTAINER}
          textStyle={BOLD}
          text={translate("welcomeScreen.changeLanguage")}
          onPress={() => setLanguage(language === "en" ? "de" : "en")}
        />
        <Button style={CONTAINER} textStyle={BOLD} tx="welcomeScreen.back" onPress={this.goBack} />
      </View>
    )
  }
}

LoginScreen.defaultProps = {
  /**
   * Some description here.
   * */
}

LoginScreen.propTypes = {
  /**
   * Some description here.
   * */
}
