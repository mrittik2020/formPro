import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MultiFileComponent } from './multi-file/multi-file.component';
import { OneFromComponent } from './one-from/one-from.component';
import { SingFileComponent } from './sing-file/sing-file.component';


const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path: 'simpleFrom',
    component:OneFromComponent,
    pathMatch:"full"
  },
  {
    path: 'singleFile',
    component:SingFileComponent,
    pathMatch:"full"
  },
  {
    path: 'multipleFile',
    component:MultiFileComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
