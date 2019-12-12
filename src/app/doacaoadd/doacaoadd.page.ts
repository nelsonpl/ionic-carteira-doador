import { Component, Input  } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-doacaoadd',
  templateUrl: './doacaoadd.page.html',
  styleUrls: ['./doacaoadd.page.scss'],
})
export class DoacaoaddPage {

  // "value" passed in componentProps
  @Input() value: number;

  constructor(navParams: NavParams) {
    // componentProps can also be accessed at construction time using NavParams
  }

}
