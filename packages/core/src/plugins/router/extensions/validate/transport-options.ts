import Bluebird = require('bluebird')
import { NotSupportedError } from 'common-errors'
import type { ServiceRequest } from '@microfleet/core-types'
import { LifecyclePoints } from '..'

export type TransportOptionsAugmentedRequest = ServiceRequest & {
  action: ServiceRequest['action'] & {
    transportsOptions: {
      [transport: string]: {
        methods: string[];
      };
    };
  };
}

function postRequest(error: Error, request: TransportOptionsAugmentedRequest): Bluebird<[Error, TransportOptionsAugmentedRequest]> {
  const result: Bluebird<[Error, TransportOptionsAugmentedRequest]> = Bluebird.resolve([error, request])

  if (error) {
    return result
  }

  const { method, transport, action: { transportsOptions } } = request

  if (transportsOptions === undefined) {
    return result
  }

  const transportOptions = transportsOptions[transport]

  if (transportOptions === undefined) {
    return result
  }

  if (!transportOptions.methods.includes(method)) {
    throw new NotSupportedError(`Route ${request.route} method ${method}`)
  }

  return result
}

export default [{
  handler: postRequest,
  point: LifecyclePoints.postRequest,
}]
