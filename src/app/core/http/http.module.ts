import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './api/in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
    imports: [
        HttpClientModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    exports: [HttpClientModule],
})
export class HttpModule { }
