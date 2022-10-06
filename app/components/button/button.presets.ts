import { ViewStyle, TextStyle } from "react-native"
import { color, spacing } from "../../theme"

export const buttonPresets = {
  /**
   * Some description here.
   * */
  primary: {
    backgroundColor: color.palette.black,
  } as ViewStyle,
  /**
   * Some description here.
   * */
  secondary: {
    backgroundColor: color.palette.white,
  } as ViewStyle,
  /**
   * Some description here.
   * */
  transparent: {
    backgroundColor: color.transparent,
  } as ViewStyle,
}

export const textPresets = {
  /**
   * Some description here.
   * */
  primary: {
    color: color.palette.white,
  } as TextStyle,
  /**
   * Some description here.
   * */
  secondary: {
    color: color.palette.black,
  } as TextStyle,
  /**
   * Some description here.
   * */
  transparent: {
    color: color.palette.black,
  } as TextStyle,
}
