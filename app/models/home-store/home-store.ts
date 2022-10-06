//home-store.ts
// Path: app\models\home-store\home-store.ts
import { observable, action } from "mobx"
import { RootStore } from "../root-store"
import { HomeStoreModel } from "./home-store-model"

export class HomeStore implements HomeStoreModel {
  @observable
  public count: number = 0

  constructor(private rootStore: RootStore) {}

  @action
  public increment = () => {
    this.count++
  }
}

// Path: app\models\root-store\root-store.ts
import { HomeStore } from "../home-store/home-store"

export class RootStore {
  public homeStore: HomeStore

  constructor() {
    this.homeStore = new HomeStore(this)
  }
}

// Path: app\screens\home\home-screen.tsx

import * as React from "react"
import { View, Text, Button } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { inject, observer } from "mobx-react"
import { RootStore } from "../../models/root-store"
import { color } from "../../theme"

export interface HomeScreenProps extends NavigationScreenProps<{}> {
  rootStore: RootStore
}

@inject("rootStore")
@observer
export class HomeScreen extends React.Component<HomeScreenProps, {}> {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: color.palette.black }}>
        <Text style={{ color: color.palette.white, fontSize: 30 }}>
          {this.props.rootStore.homeStore.count}
        </Text>
        <Button title="Increment" onPress={this.props.rootStore.homeStore.increment} />
      </View>
    )
  }
}

// Path: app\screens\register\register-screen.tsx
import * as React from "react"
import { View, Text, Button } from "react-native"
