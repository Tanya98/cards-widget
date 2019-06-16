import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/core/services/card.service';
import { Data } from 'src/app/core/models';

@Component({
    selector: 'app-main-card',
    templateUrl: './main-card.component.html',
    styleUrls: ['./main-card.component.scss']
})

export class MainCardComponent implements OnInit {

    public bg = 'assets/images/marina-bay-sands.jpg';

    selected = {};
    data: Data[];

    constructor(private cardService: CardService) { }

    ngOnInit() {
        this.cardService.getData();
        this.changeType('hotel');
    }

    changeType(type: string) {
        this.cardService.getDataByType(type).subscribe((datas) => {
            this.data = datas;
            this.selected = this.data[0];
        });
    }

    navClick(data) {
        this.selected = data;
    }
}
