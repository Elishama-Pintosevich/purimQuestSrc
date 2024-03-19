import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestComponent } from './quest/quest.component';
import { WinComponent } from './win/win.component';

const routes: Routes = [{component:QuestComponent, path:'', title:'purim quest'}, {component:WinComponent, path:'win', title:'win'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
