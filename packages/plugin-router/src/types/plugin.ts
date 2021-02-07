import Bluebird from 'bluebird'
import Router from '../router'
import { ServiceRequest } from './router'
import { AuthConfig } from '../lifecycle/actions/auth'
import { ValidateResponseConfig } from '../lifecycle/actions/validate-response'
import { LifecycleExtensions } from '../extensions'

declare module '@microfleet/core-types' {
  export interface Microfleet {
    router: Router
    dispatch: (route: string, request: Partial<ServiceRequest>) => Bluebird<any>
  }

  export interface ConfigurationOptional {
    router: RouterPluginConfig
  }
}

export type RouterPluginConfig = {
  auth: AuthConfig
  extensions: {
    register: LifecycleExtensions[]
  }
  routes: RouterPluginRoutesConfig
}

export interface RouterPluginRoutesConfig {
  directory?: string
  enabled?: Record<string, string>
  prefix?: string
  responseValidation?: ValidateResponseConfig
  enabledGenericActions?: string[]
}
