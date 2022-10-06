import { ApisauceInstance, create, ApiResponse } from "apisauce"
import { getGeneralApiProblem } from "./api-problem"
import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config"
import * as Types from "./api.types"

/**
 * Manages all requests to the API.
 */
export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce: ApisauceInstance

  /**
   * Configurable options.
   */
  config: ApiConfig

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
  }

  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */

  /**
   * Gets a list of users.
   */

  getMusic(): Promise<Types.GetMusicResult> {
    throw new Error("Method not implemented.")
  }

  getMusics(): Promise<Types.GetMusicsResult> {
    throw new Error("Method not implemented.")
  }

  getuser(): Promise<Types.User> {
    throw new Error("Method not implemented.")
  }

  getusers(): Promise<Types.GetUsers> {
    throw new Error("Method not implemented.")
  }
}
