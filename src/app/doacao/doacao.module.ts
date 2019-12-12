import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DoacaoPage } from './doacao.page';


import { DoacaoaddPage } from '../doacaoadd/doacaoadd.page';

const routes: Routes = [
  {
    path: '',
    component: DoacaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [DoacaoaddPage],
  declarations: [DoacaoPage, DoacaoaddPage]
})
export class DoacaoPageModule {}
