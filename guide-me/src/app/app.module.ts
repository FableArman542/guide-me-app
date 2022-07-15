import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule, SETTINGS } from "@angular/fire/compat/firestore";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { AngularFireDatabaseModule  } from "@angular/fire/compat/database";
import { HttpClientModule } from '@angular/common/http';
import { GooglePlus } from '@awesome-cordova-plugins/google-plus/ngx';

import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { ModallengthComponent } from './components/modallength/modallength.component';


@NgModule({
  declarations: [AppComponent, ModallengthComponent],
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, GooglePlus],
  bootstrap: [AppComponent],
})
export class AppModule {}
