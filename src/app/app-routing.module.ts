import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestComponent } from './quest/quest.component';
import { WinComponent } from './win/win.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [{component:StartComponent, path:'', title:'start'},{component:QuestComponent, path:'quest', title:'purim quest'}, {component:WinComponent, path:'win', title:'win'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
