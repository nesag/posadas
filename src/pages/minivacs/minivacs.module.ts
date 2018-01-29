import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinivacsPage } from './minivacs';

@NgModule({
  declarations: [
    MinivacsPage,
  ],
  imports: [
    IonicPageModule.forChild(MinivacsPage),
  ],
})
export class MinivacsPageModule {}
