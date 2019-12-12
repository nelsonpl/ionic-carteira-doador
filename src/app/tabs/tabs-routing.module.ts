import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:
      [
        { path: 'home', children: [ { path: '', loadChildren: '../home/home.module#HomePageModule' } ] },
        { path: 'perfil', children: [ { path: '', loadChildren: '../perfil/perfil.module#PerfilPageModule' } ] },
        { path: 'doacao', children: [ { path: '', loadChildren: '../doacao/doacao.module#DoacaoPageModule' } ] },
        { path: '', redirectTo: '/tabs/home', pathMatch: 'full' }
      ]
  },
  { path: '', redirectTo: '/tabs/home', pathMatch: 'full' }
];

@NgModule({
  imports:
    [ RouterModule.forChild(routes) ],
  exports:
    [ RouterModule ]
})
export class TabsPageRoutingModule {};