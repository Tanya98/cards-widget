import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CardService } from 'src/app/core/services/card.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

    public items = [
        {
            type: 'hotel'
        },
        {
            type: 'fishing'
        },
        {
            type: 'tour'
        }
    ];

    @Output() changeType = new EventEmitter<any>();
    change(type: any) {
        this.changeType.emit(type);
    }

    constructor(private cardService: CardService) { }

    ngOnInit() {
        this.cardService.getData();
    }
}