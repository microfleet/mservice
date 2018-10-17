import { ServiceRequest } from '../../../../types'

export type ServiceRequestWithSchema = ServiceRequest & {
  schema?: string;
}

export default [{
  point: 'postRequest',
  async handler(error: Error, request: ServiceRequestWithSchema) {
    if (error) {
      throw error
    }

    const { action } = request

    if (action.schema === undefined) {
      action.schema = action.actionName
    }

    return [error, request]
  },
}]