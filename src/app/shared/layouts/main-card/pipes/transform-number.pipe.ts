import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'number'
})

export class NumberPipe implements PipeTransform {
    transform(tel: number): any {
        const str = tel + '';
        const a = str.slice(0, 1);
        const b = str.slice(1, 4);
        const c = str.slice(4, 7);
        const d = str.slice(7, 10);
        const result = 'Tel ' + '+' + a + ' ' + b + ' ' + c + ' ' + d;
        return result;
    }
}
