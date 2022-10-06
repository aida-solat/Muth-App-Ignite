import { inject, observer } from "mobx-react"
import { NavigationScreenProps } from "react-navigation"
import { Button, Screen, Text, Wallpaper } from "../../components"
import { color, spacing } from "../../theme"
import { translate } from "../../i18n"
import * as React from "react"
import { View } from "react-native"
import { RootStore } from "../../models"

export interface SignInScreenProps extends NavigationScreenProps<{}> {
  /**
   * Some description here.
   */
  rootStore?: RootStore
}

/**
 * Describe your component here
 *
 */
@inject("rootStore")
@observer
export class SignInScreen extends React.Component<SignInScreenProps, {}> {
  goBack = () => this.props.navigation.goBack(null)

  render() {
    const { rootStore } = this.props
    const { language } = rootStore!.i18nStore
    const { setLanguage } = rootStore!.i18nStore
    return (
      <View testID="SignInScreen" style={FULL}>
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

SignInScreen.defaultProps = {
  /**
   * Some description here.
   *
   * */
}

SignInScreen.propTypes = {
  /**
   * Some description here.
   *
   * */
}
