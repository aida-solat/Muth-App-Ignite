import React from "react"
import { Button as RNEButton } from "react-native-elements"
import { ButtonProps as RNEButtonProps } from "react-native-elements"
import { ViewStyle, TextStyle, StyleProp } from "react-native"
import { color, spacing } from "../../theme"
import { translate } from "../../i18n"

export interface ButtonProps extends RNEButtonProps {
  /**
   * Some description here.
   * */
  preset?: "primary" | "secondary" | "transparent"
  /**
   * Some description here.
   * */
  tx?: string
  /**
   * Some description here.
   * */
  text?: string
  /**
   * Some description here.
   * */
  children?: React.ReactNode
  /**
   * Some description here.
   * */
  style?: StyleProp<ViewStyle>
  /**
   * Some description here.
   * */
  textStyle?: StyleProp<TextStyle>
}

/**
 * Describe your component here
 * */
export function Button(props: ButtonProps) {
  // grab the props
  const {
    preset = "primary",
    tx,
    text,
    children,
    style: styleOverride,
    textStyle: textStyleOverride,
    ...rest
  } = props

  // figure out which content to display
  const content = tx ? translate(tx) : text || children

  // figure out which button style to use
  const buttonStyle: StyleProp<ViewStyle> = {
    backgroundColor: color.transparent,
  }
  const buttonTextStyle: StyleProp<TextStyle> = {
    color: color.palette.black,
  }
  switch (preset) {
    case "primary":
      buttonStyle.backgroundColor = color.palette.black
      buttonTextStyle.color = color.palette.white
      break
    case "secondary":
      buttonStyle.backgroundColor = color.palette.white
      buttonTextStyle.color = color.palette.black
      break
    case "transparent":
      buttonStyle.backgroundColor = color.transparent
      buttonTextStyle.color = color.palette.black
      break
  }

  return (
    <RNEButton
      title={content}
      buttonStyle={[buttonStyle, styleOverride]}
      titleStyle={[buttonTextStyle, textStyleOverride]}
      {...rest}
    />
  )
}

Button.defaultProps = {}

Button.propTypes = {}
