import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatSelectModule, 
  MatIconModule, 
  MatButtonModule, 
  MatCardModule,
  MatBadgeModule,
  MatDividerModule,
  MatChipsModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HousepageComponent } from './housepage/housepage.component';
import { ChardetailsComponent } from './chardetails/chardetails.component';

const routes: Routes = [
     { path: 'house', component: HousepageComponent },
     { path: 'house/:char', component: ChardetailsComponent },
     { path: 'home', component: HomepageComponent },
     { path: '', redirectTo: '/home', pathMatch: 'full'},
     { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HousepageComponent,
    ChardetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    MatIconModule, 
    MatButtonModule, 
    MatCardModule, 
    MatBadgeModule,
    MatDividerModule,
    MatChipsModule,
    FlexLayoutModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
