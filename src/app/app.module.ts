import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutModule } from './shared/layouts/layouts.module';
import { UiKitModule } from './shared/ui-kit/ui-kit.module';
import { HttpModule } from './core/http/http.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { CardEffect } from './shared/layouts/store/effects/card.effect';
import { DataService } from './core/services/data.service';
import { CardService } from './core/services/card.service';
import { cardReducer } from './shared/layouts/store/reducers/card.reducer';
import { RoutingModule } from './core/routing/routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    RoutingModule,
    LayoutModule,
    UiKitModule,
    StoreModule.forRoot({ card: cardReducer }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([CardEffect]),
  ],
  declarations: [
    AppComponent,
  ],
  exports: [
  ],

  providers: [
    {
      provide: DataService,
      useClass: DataService
    },
    {
      provide: CardService,
      useClass: CardService
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
