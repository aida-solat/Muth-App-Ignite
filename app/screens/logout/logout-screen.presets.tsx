// logout-screen.presets.tsx
import { ViewStyle } from "react-native"
import { color, spacing } from "../../theme"

export const logoutScreenPresets = {
  /**
   * A container for your screen.
   * This is a good place to put your screen's background.
   * You can also use this to apply padding or margin around your screen.
   *  */

  screen: {
    backgroundColor: color.transparent,
  } as ViewStyle,
  /**
   * A container for your screen's content.
   * This is a good place to put your screen's content.
   * You can also use this to apply padding or margin around your screen's content.
   * */
  content: {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[4],
  } as ViewStyle,
}

// Language: typescript
