import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DoacaoaddPage } from '../doacaoadd/doacaoadd.page';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.page.html',
  styleUrls: ['./doacao.page.scss'],
})
export class DoacaoPage implements OnInit {

  constructor(public modalController: ModalController) {}

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: DoacaoaddPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

}
