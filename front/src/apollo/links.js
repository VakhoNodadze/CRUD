import { split } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { createUploadLink } from 'apollo-upload-client'
// import { getMainDefinition } from 'apollo-utilities'
import { onError } from 'apollo-link-error'

import config from 'config'
import { getToken, clearToken } from '../services/auth'

export const errorLink = onError(
  ({ operation, graphQLErrors, networkError }) => {
    if (operation.operationName === 'SigninMutation') {
      // console.log('failed login')
    }

    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => {
        if (message === 'User not authorized') {
          clearToken()
        }
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      })
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`)
      if (networkError.statusCode === 401) {
        clearToken()
      }
    }
  }
)

export const httpLink = createHttpLink({
  uri: config.apiGraphqlUrl
  // fetch,
})

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: getToken() || ''
  }
}))

export const httpLinkWithAuth = authLink.concat(httpLink)

const uploadLink = createUploadLink({
  uri: config.apiGraphqlUrl
  // fetch,
})

export const uploadLinkWithAuth = authLink.concat(uploadLink)

export const terminatingLink = split(
  ({ getContext }) => {
    const { isUploadMutation } = getContext()
    return !!isUploadMutation
  },
  uploadLinkWithAuth,
  httpLinkWithAuth
)
