import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearPage } from './crear';

@NgModule({
  declarations: [
    CrearPage,
  ],
  imports: [
    IonicPageModule.forChild(CrearPage),
  ],
})
export class CrearPageModule {}
