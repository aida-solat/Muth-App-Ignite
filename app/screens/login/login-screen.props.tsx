import { RootStore } from "../../models/root-store/root-store"

export interface LoginScreenProps extends NavigationScreenProps<{}> {
  /**
   * Some description here.
   * */
  rootStore?: RootStore

  /**
   * Some description here.
   * */
  loginStore?: LoginStore

  /**
   * Some description here.
   * */
  login: (username: string, password: string) => void

  /**
   * Some description here.
   * */
  loginLoading: boolean

  /**
   * Some description here.
   * */
  loginError: string

  /**
   * Some description here.
   * */
  loginErrorMessage: string

  /**
   * Some description here.
   * */
  loginSuccess: boolean

  /**
   * Some description here.
   * */
  loginSuccessMessage: string

  /**
   * Some description here.
   * */
  loginReset: () => void

  /**
   * Some description here.
   * */
  loginResetSuccess: boolean

  /**
   * Some description here.
   * */
  loginResetSuccessMessage: string

  /**
   * Some description here.
   * */
  loginResetError: string

  /**
   * Some description here.
   * */
  loginResetErrorMessage: string

  /**
   * Some description here.
   * */
  loginResetLoading: boolean
}
