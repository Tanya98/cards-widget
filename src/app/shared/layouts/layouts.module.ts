import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UiKitModule } from '../ui-kit/ui-kit.module';
import { MainCardComponent } from './main-card/main-card.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { SocialCardComponent } from './social-card/social-card.component';
import { MenuComponent } from './main-card/menu/menu.component';
import { RouterModule } from '@angular/router';
import { NumberPipe } from './main-card/pipes/transform-number.pipe';
import { ImageCardComponent } from './image-card/image-card.component';

@NgModule({
    imports: [
        RouterModule,
        UiKitModule,
    ],
    declarations: [
        MainCardComponent,
        WeatherCardComponent,
        SocialCardComponent,
        MenuComponent,
        ImageCardComponent,
        NumberPipe
    ],
    exports: [
        NumberPipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutModule { }
