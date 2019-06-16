import { Injectable } from '@angular/core';
import { Data } from '../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as actions from '../../shared/layouts/store/actions/card.action';
import { CardState } from 'src/app/shared/layouts/store/reducers/card.reducer';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable()
export class CardService {
    data$: Observable<Data[]>;
    constructor(private store: Store<CardState>) {
        this.data$ = store.select((state: any) => state.card.data);
    }

    public getData() {
        return this.store.dispatch(new actions.GetAllData);
    }

    public getDataByType(type: string) {
        return this.data$.pipe(
            map((data: Data[]) => data.filter(d => d.type === type))
        );
    }
    public getImg(img: string) {
        return this.data$.pipe(
            map((data: Data[]) => data.filter(d => d.img === img))
        );
    }
}