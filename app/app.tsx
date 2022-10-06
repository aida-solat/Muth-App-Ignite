/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigators, so head over there
 * if you're interested in adding screens and navigators.
 */
import "./i18n"
import "./utils/ignore-warnings"
import React, { useState, useEffect } from "react"
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"
import { initFonts } from "./theme/fonts" // expo
import * as storage from "./utils/storage"
import { AppNavigator, useNavigationPersistence } from "./navigators"
import { RootStore, RootStoreProvider, setupRootStore } from "./models"
import { ToggleStorybook } from "../storybook/toggle-storybook"
import { ErrorBoundary } from "./screens/error/error-boundary"

// This puts screens in a native ViewController or Activity. If you want fully native
// stack navigation, use `createNativeStackNavigator` in place of `createStackNavigator`:
// https://github.com/kmagiera/react-native-screens#using-native-stack-navigator

export const App = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false)
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined)
  const [initialNavigationState, setInitialNavigationState] = useState()
  const containerRef = React.useRef()
  const { getActiveChildNavigationOptions } = useNavigationPersistence(
    containerRef,
    () => setInitialNavigationState,
  )

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load our initial navigation state
        setInitialNavigationState(await storage.loadNavigationState())

        // Load fonts
        await initFonts()

        // Initialize the root store
        setupRootStore().then(setRootStore)
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setLoadingComplete(true)
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  if (!isLoadingComplete || !rootStore) {
    return null
  } else {
    return (
      <RootStoreProvider value={rootStore}>
        <ErrorBoundary>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <AppNavigator
              ref={containerRef}
              initialState={initialNavigationState}
              screenProps={{ getActiveChildNavigationOptions }}
            />
            <ToggleStorybook />
          </SafeAreaProvider>
        </ErrorBoundary>
      </RootStoreProvider>
    )
  }
}

// app\app.tsx
