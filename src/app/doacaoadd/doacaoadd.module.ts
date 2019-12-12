import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DoacaoaddPage } from './doacaoadd.page';

const routes: Routes = [
  {
    path: '',
    component: DoacaoaddPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DoacaoaddPage]
})
export class DoacaoaddPageModule {}
