import { compose, prop, defaultTo } from 'lodash/fp'

import { defaultState } from './reducer'

export const featureState = compose(
  defaultTo(defaultState),
  prop('YAMLFile')
)

export const getIsLoading = compose(
  prop('isLoading'),
  featureState
)

export const getLoadSuccess = compose(
  prop('loadSuccess'),
  featureState
)

export const getData = compose(
  prop('data'),
  featureState
)

export const getLoadError = compose(
  prop('loadError'),
  featureState
)
