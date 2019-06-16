import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainCardComponent } from 'src/app/shared/layouts/main-card/main-card.component';

const routes: Routes = [
    {
        path: '',
        component: MainCardComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }
