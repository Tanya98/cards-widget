import { Data } from 'src/app/core/models';
import * as fromAction from '../actions/card.action';

export interface CardState {
    data: Data[];
    dataByCategory: Data[];
}

export const cardInitialState: CardState = {
    data: [],
    dataByCategory: []
}

export const cardReducer = (state = cardInitialState, action: fromAction.Action) => {
    switch (action.type) {
        case fromAction.GET_ALL_DATA: {
            return { ...state }
        }
        case fromAction.SET_ALL_DATA: {
            const data = action.payload;
            return {
                ...state,
                data: state.data.length === 0 ? [...state.data.concat(...data)] : state.data,
            }
        }
        default:
            return state;
    }
}