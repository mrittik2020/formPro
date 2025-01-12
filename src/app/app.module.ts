import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { MultiFileComponent } from './multi-file/multi-file.component';
import { SingFileComponent } from './sing-file/sing-file.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OneFromComponent } from './one-from/one-from.component';


import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';


//Materials Imports----------------------------------------------------------------
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';





@NgModule({ declarations: [
        AppComponent,
        OneFromComponent,
        NavbarComponent,
        MultiFileComponent,
        SingFileComponent,
        HomeComponent,
        TestComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatRadioModule,
        MatCheckboxModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
