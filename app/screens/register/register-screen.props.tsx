//register-screen.tsx
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { inject, observer } from "mobx-react"
import { RootStore } from "../../models/root-store"
import { translate } from "../../i18n"
import { Button } from "../../components"

export interface RegisterScreenProps extends NavigationScreenProps<{}> {
  /**
   *
   * */
  rootStore?: RootStore
}

/**
 *
 * */
@inject("rootStore")
@observer
export class RegisterScreen extends React.Component<RegisterScreenProps, {}> {
  goBack = () => this.props.navigation.goBack(null)

  render() {
    const { rootStore } = this.props
    const { language } = rootStore!.i18nStore
    const { setLanguage } = rootStore!.i18nStore
    return (
      <View testID="RegisterScreen" style={FULL}>
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

RegisterScreen.defaultProps = {
  /**
   *
   * */
}

RegisterScreen.propTypes = {
  /**
   *
   * */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.palette.black,
  marginVertical: spacing[4],
  marginHorizontal: spacing[4],
  paddingHorizontal: spacing[4],
  paddingVertical: spacing[2],

  borderRadius: 4,

  shadowColor: color.palette.black,
  shadowOffset: { width: 0, height: 8 },
  shadowOpacity: 0.1,
  shadowRadius: 16,
  elevation: 3,
}
const BOLD: TextStyle = { fontWeight: "bold" }
