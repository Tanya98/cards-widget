import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataService } from 'src/app/core/services/data.service';
import * as fromAction from '../actions/card.action';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Data } from 'src/app/core/models';
import { Injectable } from '@angular/core';

@Injectable()
export class CardEffect {
    constructor(private actions$: Actions, private dataService: DataService) { }

    @Effect()
    loadData$ = this.actions$.pipe(
        ofType(fromAction.GET_ALL_DATA),
        switchMap(() => {
            return this.dataService.getData()
                .pipe(
                    map((data: Data[]) => new fromAction.SetAllData(data)),
                )
        })
    )
}