export interface SignUpScreenProps extends NavigationScreenProps<{}> {
  /**
   * Some description here.
   *
   * */
  rootStore?: RootStore
}

/**
 * Describe your component here
 *
 * */
@inject("rootStore")
@observer
export class SignUpScreen extends React.Component<SignUpScreenProps, {}> {
  goBack = () => this.props.navigation.goBack(null)

  render() {
    const { rootStore } = this.props
    const { language } = rootStore!.i18nStore
    const { setLanguage } = rootStore!.i18nStore
    return (
      <View testID="SignUpScreen" style={FULL}>
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

SignUpScreen.defaultProps = {
  /**
   * Some description here.
   *
   * */
}

SignUpScreen.propTypes = {
  /**
   * Some description here.
   *
   * */
}
