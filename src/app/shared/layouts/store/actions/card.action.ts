import { Action } from '@ngrx/store';
import { Data } from 'src/app/core/models';

export const GET_ALL_DATA = '[Data], Get All Data';
export const SET_ALL_DATA = '[Data], Set All Data';

export class GetAllData implements Action {
    readonly type = GET_ALL_DATA;
    constructor() { }
}

export class SetAllData implements Action {
    readonly type = SET_ALL_DATA;
    constructor(public payload: Data[]) { }
}

export type Action = GetAllData | SetAllData;
