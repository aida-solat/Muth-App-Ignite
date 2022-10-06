import { NavigationScreenProp } from "react-navigation"
import { inject, observer } from "mobx-react"
import { RootStore } from "../../models/root-store"
import { translate } from "../../i18n"
import { Button } from "../../components"
import React from "react"
import { View, Text, StyleSheet } from "react-native"

export interface HomeScreenProps {
  /**
   * Some description here.
   * */
  navigation: NavigationScreenProp<{}>
  /**
   * Some description here.
   * */
  rootStore?: RootStore
}

export interface MusicMainProps extends NavigationScreenProps<{}> {
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
export class MusicMain extends React.Component<MusicMainProps, {}> {
  goBack = () => this.props.navigation.goBack(null)

  render() {
    const { rootStore } = this.props
    const { language } = rootStore!.i18nStore
    const { setLanguage } = rootStore!.i18nStore
    return (
      <View testID="MusicMain" style={FULL}>
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

MusicMain.defaultProps = {
  /**
   * Some description here.
   * */
}

MusicMain.propTypes = {
  /**
   * Some description here.
   * */
}
