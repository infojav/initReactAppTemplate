import { ActionsUnion } from './../utils/actions/types'
import { createAction } from './../utils/actions/utils'

export enum ActionTypes {
    INIT_APP = '@app/INIT',
}

export const actions = {
    initApp: () => createAction(ActionTypes.INIT_APP),
}

export type Actions = ActionsUnion<typeof actions>