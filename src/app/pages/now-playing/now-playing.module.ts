import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular'
import { NowPlayingRoutingModule } from './now-playing-routing.module';


@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule,
    NowPlayingRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NowPlayingModule { }
